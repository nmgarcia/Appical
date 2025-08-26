"use client";

import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import HeroSection from "./hero-section";
import ServicesSection from "./services-section";
import JoinSection from "./join-section";
import AnimatedPlants from "./animated-plants";
import FloatingElements from "./floating-elements";

export default function AboutUsPage() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="relative">
      <HeroSection />
      <div className="relative">

        <AnimatedPlants />
        <FloatingElements />
        <div className="relative z-10">
          {/* <MissionVisionValues /> */}
          <ServicesSection />
          {/* <BenefitsSection /> */}
          <JoinSection />
        </div>
      </div>
    </div>
  );
}
