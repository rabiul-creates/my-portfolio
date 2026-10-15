import { useEffect, useState } from "react";
import BaseBtn from "./BaseBtn";
import { AnimatePresence, motion } from "motion/react";
import MenuNav from "./MenuNav";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import PremiumBtn from "./PremiumBtn";
import PremiumDropDown from "./PremiumDropDown";
gsap.registerPlugin(useGSAP);

export default function Nav() {
  const [isActive, setIsActive] = useState(false);
  const [isContactOn, setIsContactOn] = useState(false);

  const [matches, setMatches] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(min-width: 640px)").matches;
  });

  useEffect(() => {
    const media = window.matchMedia("(min-width: 640px)");

    const update = () => {
      setMatches(media.matches);
    };

    setMatches(media.matches);

    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  const variantBase = {
    desktop: {
      open: {
        width: matches ? "320px" : "230px",
        height: matches ? "500px" : "400px",
        top: "-10px",
        x: matches ? "10px" : "-10px",

        transition: {
          duration: 0.75,
          ease: [0.76, 0, 0.24, 1],
        },
      },
      closed: {
        width: 100,
        height: 48,
        top: "0px",
        x: "0px",

        transition: {
          duration: 0.75,
          ease: [0.76, 0, 0.24, 1],
          delay: 0.2,
        },
      },
    },
    mobile: {
      open: {
        width: 320,
        height: 500,
        top: "-10px",
        left: "-10px",

        transition: {
          duration: 0.75,
          ease: [0.76, 0, 0.24, 1],
        },
      },
      closed: {
        width: 100,
        height: 48,
        top: "0px",
        left: "0px",

        transition: {
          duration: 0.75,
          ease: [0.76, 0, 0.24, 1],
          delay: 0.2,
        },
      },
    },
  };
  // const breakpoint = matches ? "desktop" : "mobile";

  const variantPremium = {
    open: {
      width: matches ? "320px" : "230px",
      height: matches ? "500px" : "400px",
      top: "-10px",
      right: "-10px",
      transition: {
        duration: 0.75,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    closed: {
      width: 115,
      height: 48,
      top: "0px",
      right: "0px",
      transition: {
        duration: 0.75,
        ease: [0.76, 0, 0.24, 1],
        delay: 0.2,
      },
    },
  };

  useGSAP(() => {
    gsap.fromTo(
      ".nav",
      { yPercent: -100, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 1, delay: 2.7 },
    );
  });
  return (
    <nav className="nav w-full max-w-[1920px] mx-auto flex items-center justify-between px-4 py-4 sm:py-6 sm:px-8 md:px-12   fixed top-0 left-0 right-0 z-20 max-sm:flex-col ">
      <div className="hidden sm:block text-lg sm:text-xl md:text-2xl font-SaansRegular ">
        <span className="mr-1">Rabiul</span>
        <span>Creates</span>
      </div>
      <div className="w-full flex justify-end items-center  gap-6 sm:gap-6 md:gap-6 max-sm:justify-between">
        <div className="relative">
          <motion.div
            variants={variantBase.desktop}
            initial="closed"
            animate={isActive ? "open" : "closed"}
            className={`w-80 h-120 bg-orange-400/80 backdrop-blur-xs rounded-sm absolute top-0 ${matches ? "right-0  " : "left-0"} `}
          >
            <AnimatePresence>{isActive && <MenuNav />}</AnimatePresence>
          </motion.div>
          <BaseBtn
            isActive={isActive}
            setIsActive={setIsActive}
            openLabel={"Menu"}
            closeLabel={"close"}
          />
        </div>
       

        <div className="relative">
          <motion.div
            variants={variantPremium}
            initial="closed"
            animate={isContactOn ? "open" : "closed"}
            className="w-100 h-120 bg-black/80 text-white backdrop-blur-xs rounded-sm absolute top-0 right-0 "
          >
            <AnimatePresence>
              {isContactOn && <PremiumDropDown />}
            </AnimatePresence>
          </motion.div>
          <PremiumBtn
            isActive={isContactOn}
            setIsActive={setIsContactOn}
            openLabel={"Let's Talk"}
            closeLabel={"close"}
            bgColor={"white"}
          />
        </div>
      </div>
    </nav>
  );
}
