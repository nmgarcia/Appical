"use client";

import { Button, Container, Text, Title, Overlay, Box, Group, Stack } from "@mantine/core";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
    return (
        <Box
            className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden"
            style={{ zIndex: 1 }}
        >
            {/* Background Image */}
            <Box
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://www.loneralj.com/wp-content/uploads/2022/03/nutrientes-necesarios-para-los-cultivos-hidroponicos-1024x683.jpg')",
                    zIndex: 0
                }}
            >
                <Overlay
                    gradient="linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4))"
                    opacity={0.7}
                    style={{ zIndex: 1 }}
                />
            </Box>

            <Container size="lg" className="relative text-white" style={{ zIndex: 10 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <Title
                        order={1}
                        className="text-6xl font-bold mb-6 text-white"
                        style={{ fontFamily: 'var(--font-nunito), sans-serif' }}
                    >
                        El futuro del agro está aquí
                    </Title>

                    <Text
                        size="xl"
                        className="mb-8 text-gray-100 max-w-3xl mx-auto"
                        style={{ fontFamily: 'var(--font-nunito), sans-serif' }}
                    >
                        Conecta, aprende y crece con Appical. La plataforma que une tecnología y naturaleza
                        para transformar la industria agrícola argentina.
                    </Text>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        <Group justify="center" gap="md" wrap="wrap">
                            <Button
                                component={Link}
                                href="/directorio"
                                size="lg"
                                radius="xl"
                                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                style={{ fontFamily: 'var(--font-nunito), sans-serif' }}
                            >
                                Explorar Proveedores
                            </Button>
                            <Button
                                component={Link}
                                href="/capacitaciones"
                                size="lg"
                                variant="outline"
                                color="white"
                                radius="xl"
                                className="border-white text-white hover:bg-white hover:text-green-700 px-8 py-3 font-semibold transition-all duration-300 transform hover:scale-105"
                                style={{ fontFamily: 'var(--font-nunito), sans-serif' }}
                            >
                                Ver Capacitaciones
                            </Button>
                        </Group>
                    </motion.div>
                </motion.div>
            </Container>
        </Box>
    );
}
