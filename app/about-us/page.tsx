import type { Metadata } from "next";
import AboutUsPage from "@/components/about/about-us-page";

export const metadata: Metadata = {
    title: "Acerca de Nosotros | Appical - Plataforma Agrícola",
    description:
        "Conoce más sobre Appical, la plataforma que revoluciona el sector agrícola conectando productores, proveedores y profesionales del agro.",
    keywords: ["agricultura", "plataforma", "agro", "productores", "proveedores", "acerca de"],
    openGraph: {
        title: "Acerca de Nosotros | Appical",
        description: "La plataforma que revoluciona el sector agrícola",
        type: "website",
    },
};

/**
 * About Us page component - Information about the company and platform
 * Displays the about us content
 */
export default function AboutUsPageRoute() {
    return <AboutUsPage />;
}
