import { motion } from "motion/react";
import { useState } from "react";
import PremiumBtn from "./PremiumBtn";

export default function PremiumDropDown() {
  const [isSent, setIsSent] = useState(false);
  const variants = {
    enter: {
      opacity: 0,
      width: "0%",
    },
    animate: {
      opacity: 1,
      width: "100%",

      transition: {
        duration: 1,

        delay: 0.4,

        ease: [0.76, 0, 0.24, 1],
      },
    },
    exit: {
      opacity: 0,
      width: "0%",
      transition: {
        duration: 0.4,

        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full h-full pt-15 sm:pt-20 pb-4 sm:pb-8 px-3 sm:px-6 text-sm sm:text-md text-white ">
      <form
        onSubmit={handleSubmit}
        className="w-full h-full flex flex-col justify-between items-start"
      >
        <motion.div
          variants={variants}
          initial="enter"
          animate="animate"
          exit="exit"
          className="w-full flex flex-col gap-1 origin-left"
        >
          <label htmlFor="name">Name</label>
          <input
            name="name"
            type="text"
            placeholder="Rob Bob"
            autoComplete="off"
            className="w-full bg-white h-8 sm:h-10 rounded-sm  px-2 py-2 sm:py-3
            border border-zinc-300  text-sm text-black outline-none transition placeholder:text-neutral-500 focus:border-black focus:ring-4 focus:ring-black/10"
          />
        </motion.div>
        <motion.div
          variants={variants}
          initial="enter"
          animate="animate"
          exit="exit"
          className="w-full flex flex-col gap-1 origin-left"
        >
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            placeholder="rob@bob.com"
            autoComplete="off"
            className="w-full bg-white h-8 sm:h-10 rounded-sm  px-2 py-2 sm:py-3 border border-zinc-300  text-sm text-black outline-none transition placeholder:text-neutral-500 focus:border-black focus:ring-4 focus:ring-black/10"
          />
        </motion.div>
        <motion.div
          variants={variants}
          initial="enter"
          animate="animate"
          exit="exit"
          className="w-full flex flex-col gap-1 origin-left"
        >
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id=""
            rows={5}
            autoComplete="off"
            placeholder="Tell me about your project..."
            className="resize-none  w-full bg-white  text-black rounded-sm  px-2 py-2 sm:py-3 border border-zinc-300  text-sm  outline-none transition placeholder:text-neutral-500 focus:border-black focus:ring-4 focus:ring-black/10"
          ></textarea>
        </motion.div>
        <motion.div
          variants={variants}
          initial="enter"
          animate="animate"
          exit="exit"
          className="w-full flex  items-center justify-start origin-left"
        >
          <PremiumBtn
            isActive={isSent}
            setIsActive={setIsSent}
            openLabel={"Send Message"}
            closeLabel={"THank you"}
            bgColor={"orange-400"}
            type="submit"
          />
        </motion.div>
      </form>
    </div>
  );
}
