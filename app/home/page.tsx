import type { Metadata } from "next";
import AboutUsPage from "@/components/about/about-us-page";

export const metadata: Metadata = {
    title: "Inicio | Appical - Plataforma Agrícola",
    description:
        "Descubre Appical, la plataforma que revoluciona el sector agrícola conectando productores, proveedores y profesionales del agro.",
    keywords: ["agricultura", "plataforma", "agro", "productores", "proveedores"],
    openGraph: {
        title: "Inicio | Appical",
        description: "La plataforma que revoluciona el sector agrícola",
        type: "website",
    },
};

/**
 * Home page component - Main landing page of the application
 * Displays the about us content as the primary landing experience
 */
export default function HomePage() {
    return <AboutUsPage />;
}
