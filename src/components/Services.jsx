import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const services = [
    {
      num: "01",
      name: "Branding",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, quisquam.",
      img: "",
      tags: ["Naming", "Copywriting", "Brand strategy"],
    },
    {
      num: "02",
      name: "Digital Design",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, quisquam.",
      img: "",
      tags: ["UI", "UX", "Web design", "Wireframing"],
    },
    {
      num: "03",
      name: "Development",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, quisquam.",
      img: "",
      tags: ["Frontend development", "Animation", "CMS", "Database"],
    },
  ];
  const servicesCards = useRef(null);
  useGSAP(
    () => {
      gsap.set(".split2", { opacity: 1 });

      gsap.utils.toArray(".split2").forEach((card) => {
        SplitText.create(card, {
          type: "lines",
          mask: "lines",
          linesClass: "line",
          autoSplit: true,

          onSplit(self) {
            return gsap.from(self.lines, {
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                end: "bottom bottom",
                toggleActions: "play none none none",
              },
              yPercent: 100,
              duration: 1,
              autoAlpha: 0,
              stagger: 0.2,
              ease: "cubic-bezier(0.76, 0, 0.24, 1)",
            });
          },
        });
      });
    },
    { scope: servicesCards },
  );

  return (
    <section
      id="services"
      className="services-section w-full min-h-screen my-80 font-SaansRegular  "
    >
      <div className="max-w-[1920px] w-full h-full mx-auto  px-4 sm:px-8 flex flex-col items-start justify-center ">
        <div className=" text-5xl sm:text-6xl md:text-8xl py-10">Services</div>

        <div
          ref={servicesCards}
          className="services-cards space-y-4 bg-black text-white rounded-sm px-4 py-4 w-full"
        >
          {services.map((item, index) => {
            return (
              <div
                key={index}
                className="services-card  py-10 w-full grid grid-cols-1  min-[1100px]:grid-cols-[minmax(20px,30px)_1fr_1fr_minmax(150px,400px)]  gap-10 bg-neutral-800 p-2 rounded-sm  "
              >
                <div className="split2 flex items-center justify-start  min-[1100px]:items-start">
                  {item.num}
                </div>

                <div className="split2 text-3xl lg:text-5xl  font-SaansRegular ">
                  {item.name}
                </div>
                <div className="split2 text-lg lg:text-xl text-wrap">
                  {item.desc}
                  <div className=" py-5 text-sm uppercase tracking-widest flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => {
                      return (
                        <div
                          key={tagIndex}
                          className=" px-2 py-1 border border-black rounded-md"
                        >
                          {tag}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="aspect-video shrink  w-full mx-auto min-[1100px]:max-w-90 bg-rose-900 rounded-sm">
                  {item.img}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
