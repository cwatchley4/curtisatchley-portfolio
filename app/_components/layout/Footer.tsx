export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center bg-gray-50 p-10 mt-16">
      <p className="font-black">Curtis Atchley</p>
      <p>Web developement in central IL.</p>
      <p className="text-sm">&copy; Curtis Atchley 2025</p>
      <p className="text-xs text-gray-500 mt-2 text-center">
        This site is protected by reCAPTCHA and the Google{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          className="underline"
        >
          Privacy Policy
        </a>{" "}
        and{" "}
        <a
          href="https://policies.google.com/terms"
          target="_blank"
          className="underline"
        >
          Terms of Service
        </a>{" "}
        apply.
      </p>
    </footer>
  );
}
