import { PerspectiveText2 } from "./BaseBtn";
import { motion } from "motion/react";

export default function PremiumBtn({
  isActive,
  setIsActive,
  openLabel,
  closeLabel,
  bgColor,
}) {
  return (
    <div
      onClick={() => {
        setIsActive(!isActive);
      }}
      className="h-12 w-full   rounded-sm overflow-hidden relative font-SaansRegular uppercase "
    >
      <motion.div
        animate={{ y: isActive ? "-100%" : "0%" }}
        transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
        className="relative w-full h-full tracking-wider"
      >
        <div className="w-full h-full   group perspective-distant">
          <motion.button
            initial={{ "--x": "100%" }}
            animate={{ "--x": "-100%" }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 0.3,
              type: "spring",
              stiffness: 15,
              damping: 15,
              mass: 2,
            }}
            className=" text-white px-6 py-3 w-full h-full rounded-sm relative radial-gradient group perspective-distant"
          >
            <span className="w-full h-full block tracking-wider relative linear-mask  ">
              <PerspectiveText2 label={openLabel} />
            </span>
            <span className="block absolute inset-0 rounded-sm p-0.5 linear-overlay pointer-events-none" />
          </motion.button>
        </div>
        <div className={`w-full h-full  text-black bg-${bgColor} group`}>
          <PerspectiveText2 label={closeLabel} />
        </div>
      </motion.div>
    </div>
  );
}

//  <motion.button
//           initial={{ "--x": "100%" }}
//           animate={{ "--x": "-100%" }}
//           transition={{
//             repeat: Infinity,
//             repeatType: "loop",
//             repeatDelay: 0.3,
//             type: "spring",
//             stiffness: 15,
//             damping: 15,
//             mass: 2,
//           }}
//           className="bg-black text-white px-6 py-3 rounded-sm relative radial-gradient group perspective-distant"
//         >
//           <span className="w-full h-full block tracking-wider relative linear-mask  ">
//             <PerspectiveText2 label={"Let us Talk"} />
//           </span>

//           <span className="block absolute inset-0 rounded-sm p-0.5 linear-overlay pointer-events-none" />
//         </motion.button>
