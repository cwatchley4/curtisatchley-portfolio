import { FaHtml5, FaCss3, FaReact, FaSass } from "react-icons/fa6";
import Button from "../../ui/Button";
import HeaderSubtitle from "../../ui/HeaderSubtitle";
import HeaderTypewriter from "../../ui/HeaderTypewriter";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import PageSection from "../../layout/PageSection";
import PageSectionHeader from "../../layout/PageSectionHeader";

export default function AboutSection() {
  return (
    <PageSection id="about">
      <PageSectionHeader>
        <HeaderTypewriter textTypewriter={["About Me"]} loop={1} />
        <HeaderSubtitle>Some info about me and what I do.</HeaderSubtitle>
      </PageSectionHeader>
      <div className="grid gap-8 lg:grid lg:grid-cols-2 lg:gap-18">
        <div className="max-w-110 flex flex-col gap-4">
          <h2 className="text-xl font-black">Hi there!</h2>
          <p>
            I&apos;m Curtis, a frontend web developer based in Canton, IL. I
            specialize in building functional, attractive, and responsive
            websites that help businesses stand out online.
          </p>
          <p>
            With a background in both development and design, I enjoy crafting
            clean, user-focused web experiences using modern tools like React,
            Next.js, and Tailwind CSS.
          </p>
          <p>
            I&apos;m always looking for opportunities to collaborate with
            businesses and teams that value practical, high-quality web
            solutions. Feel free to explore my projects, and don&apos;t hesitate
            to get in touch.
          </p>
          <Button>Contact</Button>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-black">My skills</h2>
          <ul className="flex flex-wrap text-5xl gap-8 max-w-110">
            <li className="text-[#e34f26]">
              <FaHtml5 />
            </li>
            <li className="text-[#1572B6]">
              <FaCss3 />
            </li>
            <li className="text-[#CC6699]">
              <FaSass />
            </li>
            <li className="text-[#06B6D4]">
              <SiTailwindcss />
            </li>
            <li className="text-[#F7DF1E]">
              <SiJavascript />
            </li>
            <li className="text-[#3178C6]">
              <SiTypescript />
            </li>
            <li className="text-[#61DAFB]">
              <FaReact />
            </li>
            <li>
              <SiNextdotjs />
            </li>
            <li className="text-[#FF7C00]">
              <SiAdobeillustrator />
            </li>
            <li className="text-[#31A8FF]">
              <SiAdobephotoshop />
            </li>
            <li className="text-[#9999FF]">
              <SiAdobepremierepro />
            </li>
          </ul>
        </div>
      </div>
    </PageSection>
  );
}
