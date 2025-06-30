import { useApp } from "@/app/_contexts/AppContext";
import { FaMoon, FaSun } from "react-icons/fa6";

export default function DarkModeToggle() {
  const { isDarkMode, setIsDarkMode } = useApp();

  return (
    <button
      className="cursor-pointer"
      onClick={() => setIsDarkMode(!isDarkMode)}
    >
      {isDarkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
}
