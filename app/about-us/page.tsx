import type { Metadata } from "next";
import AboutUsPage from "@/components/about/about-us-page";

export const metadata: Metadata = {
  title: "Acerca de Nosotros | Appical",
  description:
    "Conoce más sobre Appical, la plataforma que revoluciona el sector agrícola.",
};

export default function AcercaDePage() {
  return <AboutUsPage />;
}
