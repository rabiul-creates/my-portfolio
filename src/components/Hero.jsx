import { motion } from "motion/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const rightBlock = useRef(null);
  const leftBlock = useRef(null);

  useGSAP(() => {
    // gsap.fromTo(
    //   ".bigtitle",
    //   { y: "50vh", opacity: 0 },
    //   { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" },
    // );

    gsap.fromTo(
      ".smalltitle",
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 2.5 },
    );
  });

  useGSAP(
    () => {
      gsap.fromTo(
        ".box",
        { xPercent: -1000, yPercent: 200 },
        { xPercent: 0, yPercent: 0, delay: 1.5, duration: 1.5, stagger: 0.2 },
      );
    },
    { scope: rightBlock },
  );
  useGSAP(
    () => {
      gsap.fromTo(
        ".box",
        { xPercent: -1000, yPercent: 200 },
        { xPercent: 0, yPercent: 0, delay: 1.5, duration: 1.5, stagger: 0.2 },
      );
    },
    { scope: leftBlock },
  );

  return (
    <section className="max-w-[1920px] mx-auto w-full h-screen flex flex-col items-center justify-center relative uppercase  overflow-x-hidden ">
      <div className="w-full absolute md:translate-y-[-150%] left-0 pointer-events-none z-10 ">
        <div className="smalltitle max-w-[1920px] mx-auto relative text-xs font-SaansRegular tracking-wide sm:text-md md:text-lg w-full px-[3.5vw] lg:px-[4.5vw] flex justify-between">
          <span>One</span>
          <span>of</span>
          <span>A</span>
          <span>Kind</span>
        </div>
        <div className="relative w-full h-full ">
          <motion.div
            initial={{ "--x": "100%" }}
            animate={{ "--x": "-100%" }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 0.3,
              type: "spring",
              stiffness: 8,
              damping: 8,
              mass: 0.3,
            }}
            className="w-full text-[10vw] h-full  min-[2000px]:text-9xl text-center leading-[90%] font-SaansBold tracking-wide   absolute left-0 top-0 -z-1 radial-gradient bg-clip-text"
          >
            <div className="  linear-mask  relative bigtitle ">
              Design Engineer
            </div>
          </motion.div>
        </div>
      </div>

      <div className="w-full h-full relative ">
        <div className="w-full h-full absolute top-0 left-0   px-[3.5vw] lg:px-[2.5vw]  pt-35 pb-15">
          <div className="relative h-full w-full ">
            <div
              ref={leftBlock}
              className=" absolute bottom-0  left-0   pointer-events-none z-10 "
            >
              <div
                className="box w-10 h-10 sm:w-15 sm:h-15  
         bg-neutral-950 "
              ></div>

              <div className="flex">
                <div
                  className="box w-10 h-10 sm:w-15 sm:h-15 
         bg-neutral-950"
                ></div>
                <div
                  className="box w-10 h-10 sm:w-15 sm:h-15 
         bg-neutral-950"
                ></div>
              </div>

              <div className="flex">
                <div
                  className="box w-10 h-10 sm:w-15 sm:h-15 
         bg-neutral-950"
                ></div>
                <div
                  className="box w-10 h-10 sm:w-15 sm:h-15 
         bg-neutral-950"
                ></div>
                <div
                  className="box w-10 h-10 sm:w-15 sm:h-15 
         bg-neutral-950"
                ></div>
              </div>
            </div>
            <div
              ref={rightBlock}
              className=" absolute top-0  right-0 rotate-180 pointer-events-none z-10  "
            >
              <div
                className="box w-10 h-10 sm:w-15 sm:h-15 
         bg-neutral-950 "
              ></div>

              <div className="flex">
                <div
                  className="box w-10 h-10 sm:w-15 sm:h-15 
         bg-neutral-950"
                ></div>
                <div
                  className="box w-10 h-10 sm:w-15 sm:h-15 
         bg-neutral-950"
                ></div>
              </div>

              <div className="flex">
                <div
                  className="box w-10 h-10 sm:w-15 sm:h-15 
         bg-neutral-950"
                ></div>
                <div
                  className="box w-10 h-10 sm:w-15 sm:h-15 
         bg-neutral-950"
                ></div>
                <div
                  className="box w-10 h-10 sm:w-15 sm:h-15 
         bg-neutral-950"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
