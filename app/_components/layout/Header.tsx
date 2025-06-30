import Logo from "../ui/Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="z-10 p-4 flex justify-between items-center">
      <Logo>Curtis Atchley</Logo>
      <Navigation />
    </header>
  );
}
