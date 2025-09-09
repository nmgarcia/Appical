"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button, Container, Title, Text, Box } from "@mantine/core";
import CapacitacionesSection from "@/components/capacitaciones/capacitaciones-section";
import { capacitacionesMock } from "@/data/capacitaciones";

export default function CapacitacionesCarousel() {
    return (
        <Box
            className="py-20 bg-gradient-to-br from-green-50 to-blue-50 relative overflow-hidden"
            style={{ zIndex: 1 }}
        >
            {/* Background decoration similar to join section */}
            <motion.div
                className="absolute inset-0 opacity-10"
                animate={{
                    background: [
                        "radial-gradient(ellipse at 20% 50%, #22c55e 0%, transparent 70%)",
                        "radial-gradient(ellipse at 80% 50%, #16a34a 0%, transparent 70%)",
                        "radial-gradient(ellipse at 50% 20%, #15803d 0%, transparent 70%)",
                        "radial-gradient(ellipse at 20% 50%, #22c55e 0%, transparent 70%)",
                    ],
                }}
                transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
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
                        Capacítate con nosotros
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
                    <Text
                        size="lg"
                        c="dimmed"
                        className="w-2xl text-gray-700 mb-8 text-center"
                        style={{ fontFamily: 'var(--font-nunito), sans-serif' }}
                    >
                        Descubre nuestros cursos especializados y mejora tus habilidades en agricultura moderna
                    </Text>
                </motion.div>

                <CapacitacionesSection
                    title="Cursos Destacados"
                    capacitaciones={capacitacionesMock.slice(0, 6)}
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-center mt-12"
                >
                    <Button
                        component={Link}
                        href="/capacitaciones"
                        size="lg"
                        radius="xl"
                        className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        style={{ fontFamily: 'var(--font-nunito), sans-serif' }}
                    >
                        Ver más capacitaciones
                    </Button>
                </motion.div>
            </Container>
        </Box>
    );
}
