"use client";

import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import HeroSection from "./hero-section";
import MissionVisionValues from "./mission-vision-values";
import ServicesSection from "./services-section";
import BenefitsSection from "./benefits-section";
import JoinSection from "./join-section";

export default function AboutUsPage() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div>
      <HeroSection />

      {/* Eliminamos el Container general para que cada sección maneje su propio fondo */}
      {/* <MissionVisionValues /> */}
      <ServicesSection />
      {/* <BenefitsSection /> */}
      <JoinSection />
    </div>
  );
}
