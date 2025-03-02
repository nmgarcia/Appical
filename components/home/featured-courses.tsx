"use client";

import { Button, Card } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";

const urlPlaceholder =
  "https://media.istockphoto.com/id/1026156302/es/foto/agricultores-con-semillas-de-girasol-en-la-mano.jpg?s=612x612&w=0&k=20&c=huel6UeWkT3aJ7gvmiUFNnJdQyK8g2G8pyFFTWYhwF0=";

const courses = [
  {
    id: 1,
    title: "Técnicas Modernas de Cultivo",
    duration: "8 horas",
    price: 49.99,
    image: urlPlaceholder,
    instructor: "Dr. Carlos Mendoza",
  },
  {
    id: 2,
    title: "Manejo Sostenible de Plagas",
    duration: "6 horas",
    price: 39.99,
    image: urlPlaceholder,
    instructor: "Ing. Laura Pérez",
  },
  {
    id: 3,
    title: "Optimización de Sistemas de Riego",
    duration: "10 horas",
    price: 59.99,
    image: urlPlaceholder,
    instructor: "Ing. Roberto Gómez",
  },
];

export default function FeaturedCourses() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Capacitaciones Destacadas</h2>
          <Button
            component={Link}
            href="/capacitaciones"
            variant="outline"
            color="green"
          >
            Explorar Cursos
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card
              key={course.id}
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
            >
              <Card.Section>
                <Image
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  width={400}
                  height={200}
                  className="h-48 w-full object-cover"
                />
              </Card.Section>

              <div className="mt-4">
                <h3 className="text-lg font-medium">{course.title}</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Instructor: {course.instructor}
                </p>

                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <Clock size={16} className="mr-1" />
                  <span>{course.duration}</span>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <p className="text-xl font-bold text-green-700">
                    ${course.price}
                  </p>
                  <Button
                    component={Link}
                    href={`/capacitaciones/${course.id}`}
                    variant="light"
                    color="green"
                    radius="md"
                  >
                    Ver Curso
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
