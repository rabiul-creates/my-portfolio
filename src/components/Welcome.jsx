import { useEffect, useRef } from "react";

import gsap from "gsap";

export default function Welcome() {
  const welcomeRef = useRef(null);
  const counterRef = useRef(null);

  useEffect(() => {
    const counter = { value: 0 };

    const tl = gsap.timeline();

    tl.to(counter, {
      value: 100,
      duration: 1,
      ease: "none",
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.textContent = Math.round(counter.value);
        }
      },
    });

    tl.to(welcomeRef.current, {
      yPercent: -100,
      duration: 1.5,
      ease: "power3.inOut",
    });

    return () => tl.kill();
  });

  return (
    <section
      ref={welcomeRef}
      className="welcome w-full h-screen bg-black fixed left-0 top-0 z-99 "
    >
      <div className="w-70  h-full flex items-center justify-center text-white font-SaansRegular  mx-auto text-center place-content-center">
        <h1
          ref={counterRef}
          className=" counter w-70 place-content-center text-center "
        >
          000
        </h1>
      </div>
    </section>
  );
}
