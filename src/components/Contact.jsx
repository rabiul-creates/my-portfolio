import PremiumBtn from "./PremiumBtn";
import { useState } from "react";

export default function Contact() {
  const [isClicked, setIsClicked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section
      id="contact"
      className="max-w-[1920px] w-full h-full flex items-center justify-center  mt-80  mx-auto font-SaansRegular"
    >
      <div className="contact-container px-4 sm:px-8 w-full h-full">
        <h1 className="text-8xl">Contact</h1>

        <div className="my-20 h-full w-full max-w-7xl mx-auto grid  grid-cols-1 sm:grid-cols-[1fr_minmax(30px,80px)_1fr] gap-20">
          <div className=" w-full  text-xl lg:text-3xl flex flex-col justify-center items-center space-y-8 text-center">
            <h2 className="w-full  sm:text-start  ">Want to get in touch?</h2>
            <h2 className="w-full  sm:text-end  ">Have creative ideas ?</h2>
            <h2 className="w-full sm:text-start  ">Need direction?</h2>
            <h2 className="w-full  sm:text-end  ">
              Like the color <span className="text-orange-400">orange</span>?
            </h2>
            <h2 className="w-full  sm:text-start  ">Share your thoughts.</h2>
          </div>

          <div className="w-full h-full max-sm:text-[30rem] text-[22rem] lg:text-[25rem]  leading-0 flex items-center justify-center">
            <h1 className="max-sm:translate-x-[1.5rem] sm:translate-y-[-1.5rem]  max-sm:rotate-z-90">
              {"}"}
            </h1>
          </div>

          <div className="w-full h-full ">
            <form
              onSubmit={handleSubmit}
              className="w-full max-sm:w-3/4 min-[1100px]:w-3/4 max-sm:mt-10 space-y-10 mx-auto h-full flex flex-col justify-center items-center text-xl"
            >
              <div className="w-full flex flex-col gap-2 origin-left">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Rob Bob"
                  autoComplete="off"
                  className="w-full bg-white h-10 rounded-sm  px-2 py-3
                    border border-zinc-300  text-sm text-black outline-none transition placeholder:text-neutral-500 focus:border-orange-400 focus:ring-4 focus:ring-orange-400/10"
                />
              </div>
              <div className="w-full flex flex-col gap-2 origin-left">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  placeholder="rob@bob.com"
                  autoComplete="off"
                  className="w-full bg-white h-10 rounded-sm  px-2 py-3  border border-zinc-300  text-sm text-black outline-none transition placeholder:text-neutral-500 focus:border-orange-400 focus:ring-4 focus:ring-orange-400/10"
                />
              </div>
              <div className="w-full flex flex-col gap-2 origin-left">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  autoComplete="off"
                  placeholder="Tell me about your project..."
                  className="resize-none  w-full bg-white rounded-sm   text-black px-2 py-3  border border-zinc-300  text-sm  outline-none transition placeholder:text-neutral-500 focus:border-orange-400 focus:ring-4 focus:ring-orange-400/10"
                ></textarea>
              </div>
              <div className="w-full flex items-center justify-start origin-left">
                <PremiumBtn
                  isActive={isClicked}
                  setIsActive={setIsClicked}
                  openLabel={"Send Message"}
                  closeLabel={"THank you"}
                  bgColor={"orange-400"}
                  type="submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
