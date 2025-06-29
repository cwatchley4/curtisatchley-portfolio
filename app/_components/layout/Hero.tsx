import Link from "next/link";
import Button from "../ui/Button";
import HeaderSubtitle from "../ui/HeaderSubtitle";
import HeaderTypewriter from "../ui/HeaderTypewriter";
import HeroBackgroundSVG from "./HeroBackgroundSVG";

export default function Hero() {
  return (
    <section className="flex flex-col gap-5 h-[calc(100vh-92px)] relative justify-center items-center">
      <HeroBackgroundSVG />
      <header className="px-5 flex flex-col justify-center items-center gap-5 text-center">
        <HeaderTypewriter
          textBody="I help businesses"
          textTypewriter={[
            "grow.",
            "connect.",
            "thrive.",
            "be seen.",
            "succeed.",
            "shine.",
            "expand.",
            "get noticed.",
            "win online.",
          ]}
        />
        <HeaderSubtitle>Web developement in central IL.</HeaderSubtitle>
      </header>
      <Button>
        <Link href="#contact">Get Started</Link>
      </Button>
    </section>
  );
}
