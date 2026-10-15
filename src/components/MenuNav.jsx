import { motion } from "motion/react";
import ScrollLink from "./ScrollLink";

export default function MenuNav() {
  const Links = [
    {
      title: "Myself",
      href: "#myself",
    },
    {
      title: "Work",
      href: "#work",
    },
    {
      title: "Skillset",
      href: "#skillset",
    },
    {
      title: "Contact",
      href: "#contact",
    },
  ];

  const SocLinks = [
    {
      title: "Github",
      href: "/",
    },
    {
      title: "LinkedIn",
      href: "/",
    },
    {
      title: "Instagram",
      href: "/",
    },
  ];

  const variants = {
    enter: {
      opacity: 0,
      translateX: -50,
    },
    animate: (index) => ({
      opacity: 1,
      translateX: 0,
      transition: {
        duration: 0.5,
        delay: 0.4 + index * 0.1,
        ease: [0.76, 0, 0.24, 1],
      },
    }),
    exit: {
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const socVariants = {
    enter: {
      opacity: 0,
      translateY: 50,
    },
    animate: {
      opacity: 1,
      translateY: 0,
      transition: {
        duration: 0.5,
        delay: 1,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <div className="w-full h-full pt-18 sm:pt-20 pb-4 sm:pb-8 px-3 sm:px-6 flex flex-col justify-between ">
      <div className="flex flex-col gap-8 text-2xl sm:text-3xl md:text-4xl">
        {Links.map((link, index) => {
          return (
            <motion.div
              variants={variants}
              initial="enter"
              animate="animate"
              exit="exit"
              custom={index}
              key={index}
            >
              <ScrollLink href={link.href}>{link.title}</ScrollLink>
            </motion.div>
          );
        })}
      </div>
      <div>
        <div className="flex gap-3 sm:gap-8 text-md sm:text-lg ">
          {SocLinks.map((link) => {
            return (
              <motion.div
                variants={socVariants}
                initial="enter"
                animate="animate"
                exit="exit"
                key={link.title}
              >
                <ScrollLink href={link.href}>{link.title}</ScrollLink>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
