"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import MobileNavigationLink from "./MobileNavigationLink";

import Hamburger from "hamburger-react";

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  function handleSetIsOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="md:hidden relative z-20">
      <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} />

      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-xs shadow-lg bg-background transform transition-transform duration-300 z-10 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex items-center justify-between h-[96px]">
          <h2 className="text-2xl uppercase font-extrabold">Menu</h2>
          <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} />
        </div>
        <hr />
        <ul className="p-4 flex flex-col gap-6">
          <MobileNavigationLink link="#about" onSetIsOpen={handleSetIsOpen}>
            About
          </MobileNavigationLink>
          <MobileNavigationLink link="#projects" onSetIsOpen={handleSetIsOpen}>
            Projects
          </MobileNavigationLink>
          <MobileNavigationLink link="#contact" onSetIsOpen={handleSetIsOpen}>
            Contact
          </MobileNavigationLink>
          <MobileNavigationLink
            link="https://billing.stripe.com/p/login/4gw8Abf8M3wIb2E9AA"
            target="_blank"
            onSetIsOpen={handleSetIsOpen}
          >
            Client Portal
          </MobileNavigationLink>
        </ul>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-background z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </nav>
  );
}
