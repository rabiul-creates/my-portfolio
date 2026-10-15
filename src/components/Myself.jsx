import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Myself() {
  useGSAP(() => {
    document.fonts.ready.then(() => {
      const split = SplitText.create(".split", {
        type: "lines",
        autoSplit: true,

        onSplit(self) {
          return gsap.from(self.lines, {
            scrollTrigger: {
              trigger: ".myself-container",
              start: "top 80%",
              end: "bottom 50%",
              scrub: true,
            },
            y: 100,
            stagger: 0.2,
            ease: "none",
          });
        },
      });
      split;
    });

    // gsap.matchMedia().add("(min-width: 1100px)", () => {
    //   let tl = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: ".myself-container",
    //       start: "top 0%",
    //       end: "bottom top",
    //       scrub: true,
    //     },
    //   });

    // tl.fromTo(
    //   ".myself-video-container",
    //   { ease: "none", yPercent: -10 },
    //   { yPercent: 35 },
    // );
    // });
  });

  return (
    <section
      id="myself"
      className="max-w-[1920px] mx-auto myself-container min-h-screen w-full my-40 py-10 px-4 sm:px-8 flex flex-col items-start justify-around gap-10 font-SaansRegular "
    >
      <h1 className="text-6xl font-SaansBold text-start tracking-wider  ">
        MYSELF
      </h1>
      <div className="w-full  max-w-[1920px] flex flex-col items-start justify-center  min-[1100px]:flex-row  gap-10">
        <div className="split text-4xl font-SaansRegular w-full min-[1100px]:w-1/2  max-[1100px]:-order-1 text-wrap  flex flex-wrap gap-2 will-change-transform">
          Hello there! I am Rafsan Islam and I specialise in frontend
          development. Creating challenging websites is my passion.
        </div>

        <div className="myself-video-container  w-full min-[1100px]:w-1/2 h-100 rounded-md  max-[1100px]:-order-2 bg-neutral-800"></div>
      </div>

      <div className="mt-10 py-10 w-full flex max-sm:flex-wrap gap-y-5  sm:gap-10 items-center justify-between text-sm md:text-lg lg:text-xl text-wrap">
        <div className="bg-neutral-800 text-white px-4  rounded-sm w-1/3 h-30 flex flex-col items-start justify-around">
          <h1>Working</h1>
          <h1 className="sm:text-lg md:text-2xl lg:text-3xl underline underline-offset-4 ">
            Internationally
          </h1>
        </div>
        <div className="bg-neutral-800 text-white px-4 rounded-sm w-1/3 h-30 flex flex-col items-center justify-around">
          <h1>Based In</h1>
          <h1 className="sm:text-lg md:text-2xl lg:text-3xl underline underline-offset-4 ">
            Bangladesh
          </h1>
        </div>
        <div className="bg-neutral-800 text-white px-4 rounded-sm w-full sm:w-1/3 h-30 flex flex-col items-center sm:items-end justify-around">
          <h1>Freelance Availability</h1>
          <h1 className="sm:text-lg md:text-2xl lg:text-3xl underline underline-offset-4 ">
            September 2026
          </h1>
        </div>
      </div>
    </section>
  );
}
