# Animation Hooks Documentation

Este directorio contiene hooks personalizados para manejar animaciones con anime.js 3.2.2 y Framer Motion de manera optimizada y funcional, basados en patrones probados.

## Hooks Disponibles

### `useAppicalAnimations`

Hook principal para todas las animaciones de la aplicación usando anime.js.

**Características:**
- Animaciones de plantas (tallos, hojas, partículas)
- Elementos flotantes (semillas, hojas, burbujas)
- Animaciones de hero section
- Efectos magnéticos para botones y cards
- Sistema de partículas optimizado

**Uso:**
```tsx
import { useAppicalAnimations } from '@/hooks/use-appical-animations'

function Component() {
  const { 
    animatePlantElements,
    animateFloatingElements,
    animateHeroElements,
    initMagneticEffects,
    stopAllAnimations 
  } = useAppicalAnimations()
  
  useEffect(() => {
    animatePlantElements()
    animateFloatingElements()
    initMagneticEffects()
    
    return () => stopAllAnimations()
  }, [])
}
```

### `useScrollBasedAnimations`

Hook para animaciones basadas en scroll usando GSAP + ScrollTrigger + anime.js.

**Características:**
- Animaciones bidireccionales (entrada y salida)
- Efectos de partículas sincronizados con scroll
- Sistema de estados (assembled/disassembled)
- Configuración optimizada para mobile e iOS

**Uso:**
```tsx
import { useScrollBasedAnimations } from '@/hooks/use-scroll-based-animations'

function ScrollComponent() {
  const { 
    animateAboutSection,
    animateServicesSection,
    refreshScrollTrigger 
  } = useScrollBasedAnimations()
  
  useEffect(() => {
    animateAboutSection()
    animateServicesSection()
  }, [])
}
```

## Clases CSS Requeridas

Para que las animaciones funcionen correctamente, asegúrate de que los elementos tengan las clases CSS apropiadas:

### Elementos Animados
```tsx
// Para animaciones de plantas
<path className="stem" /> // Tallos que crecen
<ellipse className="leaf" /> // Hojas que se balancean
<div className="particle" /> // Partículas flotantes

// Para elementos flotantes
<div className="floating-seed" /> // Semillas flotantes
<div className="floating-leaf" /> // Hojas flotantes
<div className="floating-bubble" /> // Burbujas

// Para hero section
<Title className="hero-title" />
<Text className="hero-subtitle" />
<div className="hero-cta" />

// Para efectos magnéticos
<button className="magnetic-btn" />
<div className="service-card" />
```

### Estados de Animación
```css
.magnetic-element {
  transition: all 0.3s ease;
}

.magnetic-element.assembled {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
}

.magnetic-element.disassembled {
  opacity: 0.3;
  transform: translateY(20px) scale(0.95);
  filter: blur(2px);
}
```

## Mejores Prácticas

### 1. Gestión de Memoria
Siempre llama a `cleanupAnimations()` en el cleanup del useEffect:

```tsx
useEffect(() => {
  startAnimations()
  return () => cleanupAnimations()
}, [])
```

### 2. Delays y Timing
Usa delays para evitar que las animaciones empiecen antes de que el DOM esté listo:

```tsx
useEffect(() => {
  const timer = setTimeout(() => {
    startAnimations()
  }, 100)
  
  return () => {
    clearTimeout(timer)
    cleanupAnimations()
  }
}, [])
```

### 3. Performance
- Los hooks incluyen gestión automática de referencias
- Las animaciones se pausan automáticamente cuando el componente se desmonta
- Usa `useAnimationController` para pausar animaciones fuera del viewport

### 4. Configuración de Spring
Para animaciones más suaves, ajusta la configuración del spring:

```tsx
const { containerRef } = useScrollAnimations({
  springConfig: { 
    stiffness: 50,   // Más rígido = más rápido
    damping: 40,     // Más amortiguación = menos rebote
    restDelta: 0.001 // Precisión de parada
  }
})
```

### 5. Sistema de Z-Index
Usa el sistema de capas predefinido para evitar conflictos:

```tsx
// Capas disponibles (de menor a mayor z-index):
// z-background (-10)
// z-background-animation (-5)
// z-content (10)
// z-15 (15)
// z-overlay (20)
// z-modal (30)
// z-tooltip (40)
// z-max (50)

// ✅ Correcto: Animaciones en el fondo
<div className="absolute inset-0 z-background-animation">
  {/* Animaciones aquí */}
</div>

// ✅ Correcto: Contenido principal encima
<div className="relative z-content">
  {/* Contenido aquí */}
</div>
```

## Migración desde Versiones Anteriores

Si estás migrando desde código que usa anime.js directamente:

1. Reemplaza las llamadas directas a `anime()` con los hooks correspondientes
2. Mueve la lógica de scroll a `useScrollAnimations`
3. Usa `useAnimationController` para mejor control del ciclo de vida
4. Actualiza las referencias de elementos motion para usar los valores del hook

## Troubleshooting

### Las animaciones no se inician
- Verifica que los elementos tengan las clases CSS correctas
- Asegúrate de que el delay sea suficiente para que el DOM esté listo
- Comprueba que no hay errores en la consola

### Performance Issues
- Usa `useAnimationController` para pausar animaciones fuera del viewport
- Considera reducir el número de partículas en dispositivos móviles
- Ajusta la configuración del spring para animaciones menos intensivas

### Conflictos con otras librerías
- Asegúrate de que anime.js esté en la versión 4.0.0
- Verifica que Framer Motion esté actualizado
- Los hooks incluyen cleanup automático para evitar memory leaks

### Problemas de Z-Index
- Si las animaciones cubren el contenido, verifica que uses `z-background-animation`
- El contenido principal debe usar `z-content` o superior
- Usa `useZIndexManager` para gestión sistemática de capas
- Revisa que no haya conflictos con z-index inline o de otras librerías
