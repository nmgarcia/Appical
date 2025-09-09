import type { Metadata } from "next";
import HeroSection from "@/components/home/hero-section";
import ProvidersCarousel from "@/components/home/providers-carousel";
import CapacitacionesCarousel from "@/components/home/capacitaciones-carousel";
import JoinSection from "@/components/about/join-section";

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
 * Features a vibrant hero section, providers carousel, capacitaciones carousel, and join section
 */
export default function HomePage() {
    return (
        <div className="min-h-screen">
            <HeroSection />
            <ProvidersCarousel />
            <CapacitacionesCarousel />
            <JoinSection backgroundColor="white" />
        </div>
    );
}
