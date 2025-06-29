"use client";

import { useReducer, useState } from "react";

import toast from "react-hot-toast";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";

import Button from "../ui/Button";
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID_TO_ME,
  EMAILJS_TEMPLATE_ID_TO_USER,
  RECAPTCHA_SITE_KEY,
} from "@/app/_lib/config";

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
  errors: {
    name?: boolean;
    email?: boolean;
    phone?: boolean;
    message?: boolean;
  };
}

type Action =
  | { type: "update"; payload: { field: string; value: string } }
  | { type: "reset" }
  | { type: "error"; payload: { field: string; error: boolean } };

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
  errors: {
    name: false,
    email: false,
    phone: false,
    message: false,
  },
};

function reducer(state: FormState, action: Action) {
  switch (action.type) {
    case "update":
      return {
        ...state,
        [action.payload.field]: action.payload.value,
        errors: { ...state.errors, [action.payload.field]: false },
      };

    case "reset":
      return initialState;
    case "error":
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.payload.field]: action.payload.error,
        },
      };
    default:
      return state;
  }
}

export default function ContactForm() {
  const [{ name, email, phone, message }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    dispatch({
      type: "update",
      payload: {
        field: e.target.name,
        value: e.target.value,
      },
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const numericPhone = phone.replace(/\D/g, "");

    let hasError = false;

    if (!name.trim()) {
      dispatch({
        type: "error",
        payload: { field: "name", error: true },
      });
      toast.error("Please enter your name!");
      hasError = true;
    } else if (!email.trim()) {
      dispatch({
        type: "error",
        payload: { field: "email", error: true },
      });
      toast.error("Please enter your email!");
      hasError = true;
    } else if (!emailPattern.test(email)) {
      dispatch({
        type: "error",
        payload: { field: "email", error: true },
      });
      toast.error("Please enter a valid email adddress!");
      hasError = true;
    } else if (!numericPhone) {
      dispatch({
        type: "error",
        payload: { field: "phone", error: true },
      });
      toast.error("Please enter your phone number!");
      hasError = true;
    } else if (numericPhone.length !== 10) {
      dispatch({
        type: "error",
        payload: { field: "phone", error: true },
      });
      toast.error("Phone number format: (123) 456-7890");
      hasError = true;
    } else if (!message.trim()) {
      dispatch({
        type: "error",
        payload: { field: "message", error: true },
      });
      toast.error("Please enter a message!");
      hasError = true;
    } else if (!recaptchaToken) {
      toast.error("Please complete the reCAPTCHA.");
      hasError = true;
    }

    if (hasError) {
      setIsSubmitting(false);
      return;
    }

    const templateParams = {
      name,
      email,
      phone,
      message,
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID_TO_ME,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID_TO_USER,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      toast.success("Your message has been sent!");
      dispatch({ type: "reset" });
      setRecaptchaToken(null);
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      noValidate
      className="flex flex-col gap-5 bg-gray-50 p-4 rounded-lg"
      onSubmit={handleSubmit}
    >
      <input
        name="name"
        value={name}
        onChange={handleChange}
        required
        placeholder="name"
        className="bg-gray-100 px-2 py-1 rounded"
      />
      <input
        name="email"
        value={email}
        required
        onChange={handleChange}
        placeholder="email"
        className="bg-gray-100 px-2 py-1 rounded"
      />
      <PhoneInput
        placeholder="phone"
        country="us"
        disableDropdown
        disableCountryCode
        onlyCountries={["us"]}
        value={phone}
        onChange={(phoneValue) =>
          dispatch({
            type: "update",
            payload: { field: "phone", value: phoneValue || "" },
          })
        }
        inputClass="!border-0 !bg-gray-100"
        buttonClass="!border-0"
      />

      <textarea
        name="message"
        value={message}
        onChange={handleChange}
        placeholder="message"
        className="bg-gray-100 px-2 py-1 rounded"
      />
      <ReCAPTCHA
        sitekey={RECAPTCHA_SITE_KEY}
        onChange={(token: string | null) => setRecaptchaToken(token)}
      />
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send"}
      </Button>
    </form>
  );
}
