"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button, Container, Title, Text, Box } from "@mantine/core";
import { companiesMock } from "@/data/companies";

export default function ProvidersCarousel() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const scroll = () => {
            if (isHovered) return; // Pause on hover

            if (container.scrollLeft >= container.scrollWidth / 2) {
                container.scrollLeft = 0;
            } else {
                container.scrollLeft += 0.5; // Slower, smoother movement
            }
        };

        const interval = setInterval(scroll, 16); // 60fps
        return () => clearInterval(interval);
    }, [isHovered]);

    // Create multiple copies for truly infinite scroll
    const infiniteCompanies = [...companiesMock, ...companiesMock, ...companiesMock];

    return (
        <Box
            className="py-16 bg-gradient-to-br from-green-50 to-blue-50 relative overflow-hidden"
            style={{ zIndex: 1 }}
        >
            {/* Background decoration */}
            <Box
                className="absolute inset-0 bg-gradient-to-r from-green-100/20 via-transparent to-blue-100/20"
                style={{ zIndex: 0 }}
            />

            <Container size="lg" className="relative" style={{ zIndex: 10 }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <Title
                        order={2}
                        className="text-3xl font-bold mb-2"
                        style={{ fontFamily: 'var(--font-nunito), sans-serif' }}
                    >
                        Confían en nosotros
                    </Title>
                    <motion.div
                        className="flex justify-center items-center mb-4"
                        animate={{
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                        }}
                    >
                        <div className="h-1 w-16 bg-green-500 rounded-full"></div>
                        <div className="h-1 w-4 bg-green-300 rounded-full mx-2"></div>
                        <div className="h-1 w-16 bg-green-500 rounded-full"></div>
                    </motion.div>
                </motion.div>

                <Box className="relative">
                    <Box
                        ref={containerRef}
                        className="flex gap-8 overflow-hidden"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        style={{
                            width: "100%",
                            scrollBehavior: "smooth",
                        }}
                    >
                        {/* Infinite logos for seamless loop */}
                        {infiniteCompanies.map((company, index) => (
                            <motion.div
                                key={`${company.id}-${index}`}
                                className="flex-shrink-0 w-32 h-32 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center p-4 group"
                                whileHover={{ scale: 1.05, y: -5 }}
                                style={{
                                    minWidth: "128px",
                                    minHeight: "128px",
                                }}
                            >
                                <Image
                                    src={company.logo}
                                    alt={company.nombre}
                                    width={80}
                                    height={80}
                                    className="object-contain max-w-full max-h-full group-hover:scale-110 transition-transform duration-300"
                                />
                            </motion.div>
                        ))}
                    </Box>
                </Box>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-center mt-12"
                >
                    <Button
                        component={Link}
                        href="/directorio"
                        size="lg"
                        radius="xl"
                        className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        style={{ fontFamily: 'var(--font-nunito), sans-serif' }}
                    >
                        Ver nuestros proveedores
                    </Button>
                </motion.div>
            </Container>
        </Box>
    );
}
