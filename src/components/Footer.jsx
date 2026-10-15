import { motion } from "motion/react";
import ScrollLink from "./ScrollLink";

export default function Footer() {
  return (
    <footer className="max-w-[1920px] mt-50 py-4 px-4 sm:px-8 mx-auto h-screen">
      <div className="w-full flex flex-col items-center justify-end  h-full">
        <div className="w-full  grid grid-cols-2 md:grid-cols-3 grid-rows-[150px_150px_150px_100px] md:grid-rows-[300px_150px_150px] gap-4.5 text-xl font-SaansRegular tracking-wide relative">
          <ScrollLink
            href="#work"
            className="col-span-2 row-span-1 flex items-end  bg-black/10 hover:bg-orange-400/40 hover:backdrop-blur-xs active:bg-orange-400/40 active:backdrop-blur-xs  transition-all duration-300 backdrop-blur-sm rounded-sm border border-transparent transform-gpu"
          >
            <div className="pl-3 pb-2 ">Work</div>
          </ScrollLink>
          <ScrollLink
            href=""
            className="col-span-1 row-span-1 md:row-span-2 flex items-end backdrop-blur-sm bg-black/10 hover:bg-orange-400/40 hover:backdrop-blur-xs active:bg-orange-400/40 active:backdrop-blur-xs  transition-all duration-300 rounded-sm border border-transparent transform-gpu "
          >
            <div className="pl-3 pb-2">Github</div>
          </ScrollLink>
          <ScrollLink
            href="#contact"
            className="row-span-2  col-span-1 flex items-end backdrop-blur-sm bg-black/10 hover:bg-orange-400/40 hover:backdrop-blur-xs active:bg-orange-400/40 active:backdrop-blur-xs  transition-all duration-300 rounded-sm border border-transparent transform-gpu"
          >
            <div className="pl-3 pb-2  ">Contact</div>
          </ScrollLink>
          <ScrollLink className="col-span-1 row-span-1 flex items-center justify-center relative">
            <motion.div
              drag
              dragMomentum={false}
              dragConstraints={{ top: -20, bottom: 20, right: 100, left: -100 }}
              dragTransition={{ bounceStiffness: 2000, bounceDamping: 200 }}
              className="aspect-square w-40 rounded-full   backdrop-blur-xs bg-black/10   transition-all duration-300 border border-transparent transform-gpu  flex items-center justify-center cursor-grab absolute z-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2   "
            >
              <h1 className="select-none">Nothing</h1>
            </motion.div>
          </ScrollLink>
          <ScrollLink
            href=""
            className="col-span-2 row-span-1 flex   items-end backdrop-blur-sm bg-black/10 hover:bg-orange-400/40 hover:backdrop-blur-xs active:bg-orange-400/40 active:backdrop-blur-xs  transition-all duration-300 rounded-sm border border-transparent transform-gpu"
          >
            <div className="pl-3 pb-2 ">Instagram</div>
          </ScrollLink>
          <div className="col-span-2 absolute top-0 left-0 w-full h-full flex items-center justify-center tracking-widest text-6xl md:text-8xl lg:text-9xl font-SaansBold -z-1 flex-wrap text-center">
            <h1>Rafsan Creates</h1>
          </div>
        </div>
      </div>
    </footer>
  );
}
