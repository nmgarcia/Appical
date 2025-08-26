"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import anime from "animejs"

export default function FloatingElements() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -80])

  useEffect(() => {
    // Animaciones de elementos flotantes
    anime({
      targets: ".floating-seed",
      translateY: [-20, 20],
      translateX: [-10, 10],
      rotate: [0, 360],
      scale: [0.8, 1.2, 0.8],
      duration: 4000,
      easing: "easeInOutSine",
      loop: true,
      delay: anime.stagger(800),
    })

    anime({
      targets: ".floating-leaf",
      translateY: [-15, 15],
      rotate: [-10, 10],
      duration: 3000,
      easing: "easeInOutQuad",
      loop: true,
      delay: anime.stagger(600),
    })

    anime({
      targets: ".floating-bubble",
      translateY: [0, -200],
      opacity: [0, 0.6, 0],
      scale: [0.5, 1, 0.3],
      duration: 6000,
      easing: "easeOutQuad",
      loop: true,
      delay: anime.stagger(1000),
    })
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Semillas flotantes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`seed-${i}`}
          className="floating-seed absolute"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
            y: y1,
          }}
        >
          <div className="w-3 h-3 bg-amber-400 rounded-full shadow-lg opacity-70" />
        </motion.div>
      ))}

      {/* Hojas flotantes */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`leaf-${i}`}
          className="floating-leaf absolute"
          style={{
            right: `${5 + i * 15}%`,
            top: `${30 + (i % 2) * 30}%`,
            y: y2,
          }}
        >
          <svg width="20" height="25" viewBox="0 0 20 25" className="drop-shadow-sm">
            <ellipse cx="10" cy="12" rx="8" ry="12" fill="#22c55e" opacity="0.7" />
          </svg>
        </motion.div>
      ))}

      {/* Burbujas de aire */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`bubble-${i}`}
          className="floating-bubble absolute"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: "0%",
            y: y3,
          }}
        >
          <div
            className="bg-green-200 rounded-full opacity-30"
            style={{
              width: `${8 + Math.random() * 12}px`,
              height: `${8 + Math.random() * 12}px`,
            }}
          />
        </motion.div>
      ))}

      {/* Rayos de sol animados */}
      <motion.div
        className="absolute top-10 right-10"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        <svg width="60" height="60" viewBox="0 0 60 60" className="opacity-20">
          <g stroke="#fbbf24" strokeWidth="2" fill="none">
            <circle cx="30" cy="30" r="8" fill="#fbbf24" opacity="0.3" />
            <line x1="30" y1="5" x2="30" y2="15" />
            <line x1="30" y1="45" x2="30" y2="55" />
            <line x1="5" y1="30" x2="15" y2="30" />
            <line x1="45" y1="30" x2="55" y2="30" />
            <line x1="11.5" y1="11.5" x2="18.5" y2="18.5" />
            <line x1="41.5" y1="41.5" x2="48.5" y2="48.5" />
            <line x1="11.5" y1="48.5" x2="18.5" y2="41.5" />
            <line x1="41.5" y1="18.5" x2="48.5" y2="11.5" />
          </g>
        </svg>
      </motion.div>

      {/* Ondas de energía */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse at 0% 50%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)",
            "radial-gradient(ellipse at 100% 50%, rgba(22, 163, 74, 0.1) 0%, transparent 50%)",
            "radial-gradient(ellipse at 50% 0%, rgba(21, 128, 61, 0.1) 0%, transparent 50%)",
            "radial-gradient(ellipse at 0% 50%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
