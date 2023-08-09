import React, { useRef } from "react";
import Navbar from "@/components/Navbar/navbar";
import About from "@/components/About/about";
import Section from "@/components/Section/section";

export default function Home() {
  const aboutRef = useRef(null);
  const sectionRef = useRef(null);

  return (
    <div>
      <Navbar aboutRef={aboutRef} sectionRef={sectionRef} />
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={sectionRef}>
        <Section aboutRef={aboutRef} sectionRef={sectionRef} />
      </div>
    </div>
  );
}
