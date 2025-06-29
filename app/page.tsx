import AboutSection from "./_components/pages/home/AboutSection";
import Hero from "./_components/layout/Hero";
import ProjectsSection from "./_components/pages/home/ProjectsSection";
import ContactSection from "./_components/layout/ContactSection";

export default function page() {
  return (
    <main className="flex flex-col gap-16">
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
