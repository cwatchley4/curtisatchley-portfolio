import HeaderSubtitle from "../../ui/HeaderSubtitle";
import HeaderTypewriter from "../../ui/HeaderTypewriter";
import PageSection from "../../layout/PageSection";
import PageSectionHeader from "../../layout/PageSectionHeader";
import Project from "./Project";

import playMyGamesImage from "@/public/images/play-my-games.png";
import carpetNearMeImage from "@/public/images/carpetnearme.png";
import fultonCountyResourcesImage from "@/public/images/fulton-county-resources.png";
import lakelandImage from "@/public/images/lakeland.png";
import mattressByAppointmentImage from "@/public/images/mba.png";
import precisionLawnsImage from "@/public/images/precisionlawns.png";
import webbsValleyViewImage from "@/public/images/webbs.png";
import TextLink from "../../ui/TextLink";

export default function ProjectsSection() {
  return (
    <PageSection id="projects" backgroundColor="bg-background-muted">
      <PageSectionHeader>
        <HeaderTypewriter textTypewriter={["My Projects"]} loop={1} />
        <HeaderSubtitle>Some of the work I&apos;ve done.</HeaderSubtitle>
      </PageSectionHeader>
      <div className="flex flex-col gap-12 lg:gap-18">
        <Project
          projectTitle="Play My Games"
          imageSrc={playMyGamesImage}
          imageAlt="Play My Games app screen shot"
          buttonLink="https://playmygames.netlify.app/"
          buttonText="Try App"
        >
          A React web app featuring playable “Rock‑Paper‑Scissors” vs. computer
          and a Tic‑Tac‑Toe game to play with friends. Built with React and
          component-driven architecture. Includes state management, user
          interaction logic, and responsive design.
        </Project>
        {/* <Project
          projectTitle="Carpet Near Me"
          imageSrc={carpetNearMeImage}
          imageAlt="Carpet Near Me website screen shot"
          buttonLink="https://carpetnearme.com"
          buttonText="Visit Site"
        >
          Marketing website for a carpet installation business in Chicagoland.
          Built with Sass (7-1 architecture) and a modular JavaScript MVC
          structure for maintainable, scalable code. Includes a product listing
          with filter functionality, mobile-friendly layout, and a
          lead-generation booking form.
        </Project> */}
        <Project
          projectTitle="Fulton County Resources"
          imageSrc={fultonCountyResourcesImage}
          imageAlt="Fulton County Resources app screen shot"
          buttonLink="https://fultoncountyresources.com/"
          buttonText="Try App"
        >
          A personal project, this is a resource map and directory for Fulton
          County, IL, designed to help residents find food pantries, housing
          assistance, and other support services. Built with vanilla JavaScript
          and Leaflet for interactive maps. Includes search functionality and
          mobile-responsive design.
        </Project>
        <Project
          projectTitle="Mattress by Apppointment Canton"
          imageSrc={mattressByAppointmentImage}
          imageAlt="Mattress by Appointment website screen shot"
          buttonLink="https://mattressbyappointmentcanton.com"
          buttonText="Visit Site"
        >
          Modern marketing site for a local mattress store, rebuilt with Next.js
          and Tailwind CSS. Features product listings, lead capture forms, and
          responsive design optimized for conversions. Focused on providing a
          clean, fast-loading, mobile-first experience to drive customer
          inquiries.
        </Project>
        <Project
          projectTitle="Webb's Valley View Campground"
          imageSrc={webbsValleyViewImage}
          imageAlt="Webb's Valley View Campground website screen shot"
          buttonLink="https://webbsvalleyview.com/"
          buttonText="Visit Site"
        >
          A fully responsive campground website built with Next.js and Tailwind
          CSS. Features include mobile-first design and contact form integrated
          with <TextLink href="https://resend.com">Resend</TextLink>.
        </Project>
        <Project
          projectTitle="Lakeland Community Church"
          imageSrc={lakelandImage}
          imageAlt="Lakeland Community Church website screen shot"
          buttonLink="https://lakelandcanton.org"
          buttonText="Visit Site"
        >
          Website redesign, focused on quick navigation and mobile
          accessibility. Built with semantic HTML and CSS Grid. Features clean
          layout, accessible design, and simplified user flow for easy access to
          events, sermons, and giving options.
        </Project>
        <Project
          projectTitle="Precision Lawns"
          imageSrc={precisionLawnsImage}
          imageAlt="Precision Lawns website screen shot"
          buttonLink="https://precisionlawns309.com/"
          buttonText="Visit Site"
        >
          Marketing website for a now-closed lawn care business. Built with
          semantic HTML, Sass (7-1 architecture), and modular JavaScript using
          an MVC structure. Includes an online booking form, responsive design,
          and third-party live chat integration to enhance customer engagement.
        </Project>
      </div>
    </PageSection>
  );
}
