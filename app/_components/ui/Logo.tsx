import Image from "next/image";
import Link from "next/link";

import logoImage from "@/public/images/logo.png";
import { ReactNode } from "react";

interface LogoProps {
  children?: ReactNode;
}

export default function Logo({ children }: LogoProps) {
  return (
    <Link href="/" className="flex gap-4 items-center z-10">
      <Image src={logoImage} alt="Logo for Curtis Atchley" height={60} />
      <span className="font-header uppercase font-bold tracking-wide text-xl">
        {children}
      </span>
    </Link>
  );
}
