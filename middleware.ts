import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Rutas permitidas
const ALLOWED_PATHS = [
  "/",
  "/about-us",
  "/_next",
  "/api", 
  "/favicon.ico",
  "/placeholder-logo.png"
]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Verificar si la ruta está permitida
  const isAllowed = ALLOWED_PATHS.some((path) => pathname === path || pathname.startsWith(path + "/"))

  // Si no está permitida, redirigir a la página de acerca-de
  if (!isAllowed) {
    return NextResponse.redirect(new URL("/about-us", request.url))
  }

  return NextResponse.next()
}

// Configurar el middleware para que se ejecute en todas las rutas
export const config = {
  matcher: [
    /*
     * Coincide con todas las rutas excepto:
     * 1. /api (API routes)
     * 2. /_next (Next.js internals)
     * 3. /_static (internals)
     * 4. /_vercel (internals)
     * 5. /favicon.ico, /sitemap.xml, /robots.txt (archivos comunes)
     */
    "/((?!_next|_static|_vercel|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
}

