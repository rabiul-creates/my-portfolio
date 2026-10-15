import { useEffect, useRef } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Myself from "./components/Myself";
import Nav from "./components/Nav";
import Services from "./components/Services";
import Skillset from "./components/Skillset";
import Work from "./components/Work";
import "lenis/dist/lenis.css";
import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import Contact from "./components/Contact";
import Grid from "./components/Grid";
import Welcome from "./components/Welcome";
import { useState } from "react";

export default function App() {
  const lenisRef = useRef();

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <>
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />

      <Welcome />
      <Nav />
      <Hero />
      <Grid />
      <Myself />
      <Work />
      <Services />
      <Skillset />
      <Contact />
      <Footer />
    </>
  );
}
