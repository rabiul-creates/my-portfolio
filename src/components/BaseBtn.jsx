import { motion } from "motion/react";

export default function BaseBtn({
  isActive,
  setIsActive,
  openLabel,
  closeLabel,
}) {
  return (
    <div
      onClick={() => {
        setIsActive(!isActive);
      }}
      className="h-12 w-25 rounded-sm overflow-hidden relative font-SaansRegular uppercase "
    >
      <motion.div
        animate={{ y: isActive ? "-100%" : "0%" }}
        transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
        className="relative w-full h-full tracking-wider"
      >
        <div className="w-full h-full  text-black bg-orange-400 group perspective-distant">
          <PerspectiveText label={openLabel} />
        </div>
        <div className="w-full h-full  text-white bg-black group">
          <PerspectiveText label={closeLabel} />
        </div>
      </motion.div>
    </div>
  );
}

function PerspectiveText({ label }) {
  return (
    <div className=" w-full h-full flex items-center justify-center transform-3d transition-all ease-[cubic-bezier(0.76, 0, 0.24, 1)]  duration-500 group-hover:rotate-x-90 gap-0.5 relative  ">
      <p className="flex items-center justify-center inset-0 transform-gpu opacity-100  backface-hidden transform transition-all duration-750 text-inherit group-hover:-translate-y-full group-hover:opacity-0 ease-[cubic-bezier(0.76, 0, 0.24, 1)] z-20 ">
        {label}
      </p>
      <p className="absolute  transform-gpu  inset-0 flex items-center justify-center backface-hidden transform opacity-0 transition-all origin-[100%_50%] duration-750 text-inherit  group-hover:-rotate-x-90 group-hover:opacity-100 translate-y-2 ease-[cubic-bezier(0.76, 0, 0.24, 1)] ">
        {label}
      </p>
    </div>
  );
}

export function PerspectiveText2({ label }) {
  return (
    <div className=" w-full h-full flex items-center justify-center transform-3d transition-all ease-[cubic-bezier(0.76, 0, 0.24, 1)]  duration-500 group-hover:rotate-x-90 gap-0.5 relative  ">
      <p className="flex items-center justify-center inset-0 transform-gpu opacity-100  backface-hidden transform transition-all duration-750 text-inherit group-hover:-translate-y-full group-hover:opacity-0 ease-[cubic-bezier(0.76, 0, 0.24, 1)] z-20 ">
        {label}
      </p>
      <p className="absolute  transform-gpu  inset-0 flex items-center justify-center backface-hidden transform opacity-0 transition-all origin-[100%_50%] duration-750 text-inherit  group-hover:-rotate-x-90 group-hover:opacity-100 translate-y-2 ease-[cubic-bezier(0.76, 0, 0.24, 1)] ">
        {label}
      </p>
    </div>
  );
}
