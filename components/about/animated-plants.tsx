"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import anime from "animejs"

export default function AnimatedPlants() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Transformaciones suaves para diferentes elementos
  const plant1Y = useTransform(scrollYProgress, [0, 0.5, 1], [100, -50, -200])
  const plant2Y = useTransform(scrollYProgress, [0, 0.3, 0.8], [150, 0, -100])
  const plant3Y = useTransform(scrollYProgress, [0.2, 0.7, 1], [200, -30, -150])

  const plant1Scale = useTransform(scrollYProgress, [0, 0.4, 0.8], [0.5, 1.2, 0.8])
  const plant2Scale = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0.3, 1, 0.6])
  const plant3Scale = useTransform(scrollYProgress, [0, 0.6, 1], [0.4, 1.1, 0.7])

  const plant1Rotate = useTransform(scrollYProgress, [0, 1], [0, 360])
  const plant2Rotate = useTransform(scrollYProgress, [0, 1], [0, -180])

  // Animaciones con springs para suavidad
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const plant1YSpring = useSpring(plant1Y, springConfig)
  const plant2YSpring = useSpring(plant2Y, springConfig)
  const plant3YSpring = useSpring(plant3Y, springConfig)

  useEffect(() => {
    // Animaciones adicionales con anime.js para las hojas
    anime({
      targets: ".leaf",
      rotate: [0, 10, -10, 0],
      duration: 3000,
      easing: "easeInOutSine",
      loop: true,
      delay: anime.stagger(200),
    })

    // Animación de crecimiento de tallos
    anime({
      targets: ".stem",
      scaleY: [0, 1],
      duration: 2000,
      easing: "easeOutElastic(1, .8)",
      delay: anime.stagger(300),
    })

    // Partículas flotantes
    anime({
      targets: ".particle",
      translateY: [0, -100],
      translateX: [-20, 20],
      opacity: [0, 1, 0],
      duration: 4000,
      easing: "easeInOutQuad",
      loop: true,
      delay: anime.stagger(500),
    })
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Partículas flotantes */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-2 h-2 bg-green-300 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Planta 1 - Izquierda */}
      <motion.div
        className="absolute left-10 top-1/4"
        style={{
          y: plant1YSpring,
          scale: plant1Scale,
          rotate: plant1Rotate,
        }}
      >
        <svg width="120" height="200" viewBox="0 0 120 200" className="drop-shadow-lg">
          {/* Tallo principal */}
          <path
            className="stem"
            d="M60 200 Q65 150 60 100 Q55 50 60 0"
            stroke="#22c55e"
            strokeWidth="4"
            fill="none"
            style={{ transformOrigin: "bottom" }}
          />

          {/* Hojas */}
          <ellipse
            className="leaf"
            cx="40"
            cy="80"
            rx="15"
            ry="25"
            fill="#16a34a"
            style={{ transformOrigin: "center" }}
          />
          <ellipse
            className="leaf"
            cx="80"
            cy="60"
            rx="12"
            ry="20"
            fill="#15803d"
            style={{ transformOrigin: "center" }}
          />
          <ellipse
            className="leaf"
            cx="45"
            cy="40"
            rx="18"
            ry="28"
            fill="#16a34a"
            style={{ transformOrigin: "center" }}
          />

          {/* Flores */}
          <circle cx="60" cy="20" r="8" fill="#fbbf24" />
          <circle cx="60" cy="20" r="4" fill="#f59e0b" />
        </svg>
      </motion.div>

      {/* Planta 2 - Centro derecha */}
      <motion.div
        className="absolute right-20 top-1/3"
        style={{
          y: plant2YSpring,
          scale: plant2Scale,
          rotate: plant2Rotate,
        }}
      >
        <svg width="100" height="180" viewBox="0 0 100 180" className="drop-shadow-lg">
          {/* Tallo */}
          <path
            className="stem"
            d="M50 180 Q45 120 50 80 Q55 40 50 0"
            stroke="#16a34a"
            strokeWidth="3"
            fill="none"
            style={{ transformOrigin: "bottom" }}
          />

          {/* Hojas múltiples */}
          <ellipse
            className="leaf"
            cx="30"
            cy="120"
            rx="12"
            ry="20"
            fill="#22c55e"
            style={{ transformOrigin: "center" }}
          />
          <ellipse
            className="leaf"
            cx="70"
            cy="100"
            rx="10"
            ry="18"
            fill="#16a34a"
            style={{ transformOrigin: "center" }}
          />
          <ellipse
            className="leaf"
            cx="35"
            cy="80"
            rx="14"
            ry="22"
            fill="#15803d"
            style={{ transformOrigin: "center" }}
          />
          <ellipse
            className="leaf"
            cx="65"
            cy="60"
            rx="11"
            ry="19"
            fill="#22c55e"
            style={{ transformOrigin: "center" }}
          />

          {/* Frutos */}
          <circle cx="50" cy="30" r="6" fill="#ef4444" />
          <circle cx="45" cy="15" r="5" fill="#dc2626" />
        </svg>
      </motion.div>

      {/* Planta 3 - Izquierda abajo */}
      <motion.div
        className="absolute left-1/4 bottom-20"
        style={{
          y: plant3YSpring,
          scale: plant3Scale,
        }}
      >
        <svg width="80" height="120" viewBox="0 0 80 120" className="drop-shadow-lg">
          {/* Tallo corto */}
          <path
            className="stem"
            d="M40 120 Q42 80 40 40"
            stroke="#15803d"
            strokeWidth="3"
            fill="none"
            style={{ transformOrigin: "bottom" }}
          />

          {/* Hojas anchas */}
          <ellipse
            className="leaf"
            cx="25"
            cy="80"
            rx="18"
            ry="12"
            fill="#16a34a"
            style={{ transformOrigin: "center" }}
          />
          <ellipse
            className="leaf"
            cx="55"
            cy="75"
            rx="16"
            ry="10"
            fill="#22c55e"
            style={{ transformOrigin: "center" }}
          />
          <ellipse
            className="leaf"
            cx="40"
            cy="50"
            rx="20"
            ry="15"
            fill="#15803d"
            style={{ transformOrigin: "center" }}
          />
        </svg>
      </motion.div>

      {/* Efectos de ondas de fondo */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, #22c55e 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, #16a34a 0%, transparent 50%)",
            "radial-gradient(circle at 50% 20%, #15803d 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, #22c55e 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
