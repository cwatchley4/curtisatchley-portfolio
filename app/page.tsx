import AboutSection from "./_components/pages/home/AboutSection";
import Hero from "./_components/layout/Hero";
import ProjectsSection from "./_components/pages/home/ProjectsSection";
import ContactSection from "./_components/layout/ContactSection";
import Header from "./_components/layout/Header";
import HeroBackgroundSVG from "./_components/layout/HeroBackgroundSVG";

export default function page() {
  return (
    <main className="flex flex-col gap-16">
      <div>
        <HeroBackgroundSVG />
        <Header />
        <Hero />
      </div>
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
