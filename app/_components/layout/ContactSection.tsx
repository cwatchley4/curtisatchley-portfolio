import PageSection from "./PageSection";
import PageSectionHeader from "./PageSectionHeader";
import HeaderSubtitle from "../ui/HeaderSubtitle";
import HeaderTypewriter from "../ui/HeaderTypewriter";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <PageSection id="contact">
      <PageSectionHeader>
        <HeaderTypewriter textTypewriter={["Contact Me"]} loop={1} />
        <HeaderSubtitle>
          Submit the form below and I&apos;ll be in touch.
        </HeaderSubtitle>
      </PageSectionHeader>
      <ContactForm />
    </PageSection>
  );
}
