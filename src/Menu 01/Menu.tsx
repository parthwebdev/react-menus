import { useState } from "react";
import CloseIcon from "../assets/CloseIcon";
import Navbar from "./Navbar";
import NavLink from "./NavLink";

import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/" },
  { label: "What we do", href: "/" },
  { label: "Case studies", href: "/" },
  { label: "Contact", href: "/" },
];

function Menu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen((prev) => !prev);
  };

  const menuVariants = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVariants = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    animate: {
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.1,
        staggerDirection: 1,
      },
    },
  };

  return (
    <>
      <Navbar toggleMenu={toggleMenu} />

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 origin-top w-full h-screen bg-[#1b4d8f]"
          >
            <div className="flex h-full flex-col">
              <div className="flex justify-between items-center px-8 py-4">
                <h2 className="text-gray-100 text-xl uppercase">PORTFOLIO</h2>
                <button onClick={toggleMenu} className="text-3xl">
                  <CloseIcon />
                </button>
              </div>

              <motion.div
                variants={containerVariants}
                initial="initial"
                animate="animate"
                exit="initial"
                className="flex flex-col h-full justify-center items-center gap-4"
              >
                {navLinks.map((link, index) => (
                  <div key={index} className="overflow-hidden">
                    <NavLink label={link.label} to={link.href} />
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

export default Menu;
