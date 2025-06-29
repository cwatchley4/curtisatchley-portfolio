import Logo from "../ui/Logo";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="z-10 p-4 flex justify-between items-center">
      <Logo>Curtis Atchley</Logo>
      <Navigation />
      <MobileNavigation />
    </header>
  );
}
