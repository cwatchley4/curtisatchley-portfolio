import { ReactNode } from "react";

import Image, { StaticImageData } from "next/image";
import Button from "../../ui/Button";
import Link from "next/link";

interface ProjectsProps {
  children: ReactNode;
  projectTitle: string;
  imageSrc: StaticImageData;
  imageAlt: string;
  buttonLink: string;
  buttonLinkTarget?: string;
  buttonText: string;
}

export default function Project({
  children,
  projectTitle,
  imageSrc,
  imageAlt,
  buttonLink,
  buttonLinkTarget = "_blank",
  buttonText,
}: ProjectsProps) {
  return (
    <div className="grid max-w-110 text-center place-items-center gap-8 lg:gap-12 lg:grid-cols-2 lg:max-w-240 lg:text-left ">
      <Image src={imageSrc} alt={imageAlt} className="object-cover" />
      <div className="flex flex-col gap-5 items-center lg:items-baseline">
        <h3 className="font-black uppercase tracking-wide">{projectTitle}</h3>
        <p>{children}</p>
        <Button>
          <Link target={buttonLinkTarget} href={buttonLink}>
            {buttonText}
          </Link>
        </Button>
      </div>
    </div>
  );
}
