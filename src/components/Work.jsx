import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Work() {
  // const { scrollYProgress } = useScroll({
  //   target: containerRef,
  //   offset: ["start end", "end start"],
  // });
  // const moveY = useTransform(scrollYProgress, [0, 1], ["-10%", "-30%"]);

  const variants = {
    enter: {
      opacity: 0,
    },
    animate: {
      opacity: 1,

      transition: {
        duration: 0.75,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    exit: {
      opacity: 0,

      transition: {
        duration: 0.75,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <section
      id="work"
      className=" max-w-[1920px] min-h-screen flex flex-col items-center justify-center w-full px-4 md:px-8 mx-auto my-50"
    >
      <div className="w-full text-5xl sm:text-6xl md:text-8xl  font-SaansBold flex items-center justify-between uppercase py-10">
        <h1>WORK</h1>
        <h1>'26</h1>
      </div>

      <div className=" grid grid-cols-1 gap-10 min-[1100px]:gap-0  min-[1100px]:grid-cols-[minmax(300px,1fr)_minmax(500px,700px)_minmax(300px,1fr)]  min-[1100px]:grid-rows-[minmax(200px,250px)_450px_minmax(200px,250px)] mx-auto h-full w-full ">
        <div className=" ">
          <WorkCard
            index={0}
            img={
              "https://images.pexels.com/photos/22662154/pexels-photo-22662154.jpeg"
            }
            variants={variants}
          />
        </div>
        <div className="w-full h-full"></div>
        <div className="">
          <WorkCard
            index={1}
            img={
              "https://images.pexels.com/photos/34529317/pexels-photo-34529317.jpeg"
            }
            variants={variants}
          />
        </div>
        <div className="w-full h-full"></div>
        <div className="">
          <WorkCard
            index={2}
            img={
              "https://images.pexels.com/photos/38042184/pexels-photo-38042184.jpeg"
            }
            variants={variants}
            marquee={true}
            marqueeList={[
              "NextJS",
              "Lenis",
              "Gsap",
              "Branding",
              "React",
              "Design",
              "Responsive",
              "CMS",
            ]}
          />
        </div>
        <div className="w-full h-full"></div>
        <div className="">
          <WorkCard
            index={3}
            img={
              "https://images.pexels.com/photos/34818577/pexels-photo-34818577.jpeg"
            }
            variants={variants}
          />
        </div>
        <div className="w-full h-full"></div>
        <div className="">
          <WorkCard
            index={4}
            img={
              "https://images.pexels.com/photos/12055065/pexels-photo-12055065.jpeg"
            }
            variants={variants}
          />
        </div>
      </div>
    </section>
  );
}

function WorkCard({
  index,
  img,
  variants,

  marquee,
  marqueeList,
}) {
  const containerRef = useRef();

  useGSAP(
    () => {
      const imgs = containerRef.current.querySelectorAll(".image-parallax");

      gsap.to(imgs, {
        yPercent: -25,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 50%",
          end: "bottom top",
          scrub: 0.5,
        },
      });
    },
    {
      scope: containerRef,
    },
  );

  return (
    <a
      href=""
      ref={containerRef}
      className="work-section bg-black text-white p-4 rounded-sm cursor-pointer w-full h-full  flex flex-col group "
    >
      <div
        className="relative w-full h-7/8 min-[1100px]:h-4/5 
        rounded-sm  "
      >
        <div className="h-full w-full overflow-clip rounded-sm">
          <div className="max-h-100 w-full overflow-clip ">
            <div className="group-hover:scale-105  transition-transform duration-750 ease-[cubic-bezier(0.76,0,0.24,1)]">
              <img
                loading="eager"
                decoding="async"
                src={`${img}?w=800&q=80`}
                rel="preload"
                as="image"
                alt=""
                className="   image-parallax h-[120%] w-full object-center object-cover rounded-sm "
              />
            </div>
          </div>

          <div className="group-hover:opacity-100 opacity-0 transition-opacity duration-750 ease-[cubic-bezier(0.76,0,0.24,1)] backdrop-blur-xs  absolute top-0 left-0 w-full h-full flex items-center justify-center ">
            <div className="w-3/4 h-3/4  rounded-sm overflow-clip ">
              <img
                src={`${img}?w=800&q=80`}
                rel="preload"
                as="image"
                alt=""
                className="w-full h-full  object-cover rounded-sm"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full h-1/8 min-[1100px]:h-1/5  ">
        <div className=" py-3  text-xl min-[1100px]:text-lg   flex items-center justify-between">
          <div className="flex items-center justify-center gap-2">
            <div className="w-5 h-5 rounded-full bg-rose-400"></div>
            <h1>Zizzy Acabella</h1>
          </div>
          <div className="text-lg min-[1100px]:text-base">Portfolio, 2026</div>
        </div>
        {marquee ? <WorkMarquee marqueeList={marqueeList} /> : null}
      </div>
    </a>
  );
}

function WorkMarquee({ marqueeList }) {
  return (
    <div className="overflow-hidden shrink-0 w-full whitespace-nowrap text-xs">
      <motion.div
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          duration: 15,
          ease: "linear",
          repeat: Infinity,
        }}
        className="shrink-0 flex  min-w-full  "
      >
        <div className=" shrink-0 gap-10 flex items-center justify-between  min-w-full   pr-5">
          {marqueeList
            ? marqueeList.map((item, x) => {
                return <p key={x}> {item} </p>;
              })
            : null}
        </div>
        <div className=" shrink-0 gap-10 flex items-center justify-between  min-w-full  pl-5">
          {marqueeList
            ? marqueeList.map((item, xx) => {
                return <p key={xx}> {item} </p>;
              })
            : null}
        </div>
      </motion.div>
    </div>
  );
}
