"use client";
import { Carousel } from "@mantine/carousel";
import { Card, Avatar, Text } from "@mantine/core";
import { Star, Quote } from "lucide-react";
const urlPlaceholder =
  "https://media.istockphoto.com/id/1026156302/es/foto/agricultores-con-semillas-de-girasol-en-la-mano.jpg?s=612x612&w=0&k=20&c=huel6UeWkT3aJ7gvmiUFNnJdQyK8g2G8pyFFTWYhwF0=";
const testimonials = [
  {
    id: 1,
    name: "Juan Pérez",
    role: "Agricultor",
    avatar: urlPlaceholder,
    content:
      "Appical ha transformado la forma en que compro insumos para mi campo. Los precios son competitivos y la calidad de los productos es excelente.",
    rating: 5,
  },
  {
    id: 2,
    name: "María González",
    role: "Ingeniera Agrónoma",
    avatar: "/placeholder.svg?height=60&width=60",
    content:
      "Las capacitaciones disponibles en la plataforma son de primer nivel. He mejorado significativamente mis técnicas de cultivo gracias a estos cursos.",
    rating: 5,
  },
  {
    id: 3,
    name: "Roberto Sánchez",
    role: "Distribuidor de Semillas",
    avatar: "/placeholder.svg?height=60&width=60",
    content:
      "Como vendedor, he podido expandir mi negocio a nuevas regiones. El proceso de verificación es riguroso pero vale la pena por la confianza que genera.",
    rating: 4,
  },
  {
    id: 4,
    name: "Ana Martínez",
    role: "Ganadera",
    avatar: "/placeholder.svg?height=60&width=60",
    content:
      "Encontré exactamente lo que necesitaba para mi ganado a un precio justo. El envío fue rápido y el producto llegó en perfectas condiciones.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Lo que dicen nuestros usuarios
        </h2>

        <Carousel
          slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
          slideGap="xl"
          align="start"
          slidesToScroll={1}
          withControls
          loop
        >
          {testimonials.map((testimonial) => (
            <Carousel.Slide key={testimonial._id}>
              <Card
                shadow="sm"
                padding="xl"
                radius="md"
                withBorder
                className="h-full bg-white border-green-100 hover:border-green-300 transition-all"
              >
                <div className="flex flex-col h-full">
                  <div className="absolute -top-3 -left-3 bg-green-100 rounded-full p-2">
                    <Quote size={24} className="text-green-600" />
                  </div>

                  <div className="flex items-center mb-4 mt-3">
                    <Avatar
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      size="lg"
                      radius="xl"
                      className="border-2 border-green-200"
                    />
                    <div className="ml-4">
                      <Text fw={700}>{testimonial.name}</Text>
                      <Text size="sm" c="dimmed">
                        {testimonial.role}
                      </Text>
                    </div>
                  </div>

                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={
                          i < testimonial.rating
                            ? "text-yellow-500 fill-yellow-500"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>

                  <Text className="flex-grow italic text-gray-700">
                    "{testimonial.content}"
                  </Text>
                </div>
              </Card>
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
