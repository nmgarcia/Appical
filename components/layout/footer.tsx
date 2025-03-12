import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/placeholder-logo.png"
                alt="Appical Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold text-white">Appical</span>
            </Link>
            <p className="text-gray-300 mb-4">
              Conectando el campo con el futuro. La plataforma líder para el
              sector agropecuario.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-300 hover:text-white">
                <Instagram size={20} />
              </Link>
              {/* <Link href="#" className="text-gray-300 hover:text-white">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Youtube size={20} />
              </Link> */}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/productos"
                  className="text-gray-300 hover:text-white"
                >
                  Productos
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/capacitaciones"
                  className="text-gray-300 hover:text-white"
                >
                  Capacitaciones
                </Link>
              </li>
              <li>
                <Link
                  href="/vendedores"
                  className="text-gray-300 hover:text-white"
                >
                  Vendedores
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Información</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/acerca-de"
                  className="text-gray-300 hover:text-white"
                >
                  Acerca de
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-gray-300 hover:text-white"
                >
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  href="/preguntas-frecuentes"
                  className="text-gray-300 hover:text-white"
                >
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link
                  href="/politica-privacidad"
                  className="text-gray-300 hover:text-white"
                >
                  Política de Privacidad
                </Link>
              </li> */}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>Av. Agricultura 1234</p>
              <p>Ciudad Agrícola, CA</p>
              <p>Email: info@appical.com</p>
              <p>Teléfono: +123 456 7890</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Appical. Todos los derechos
            reservados.
          </p>
          <div className="mt-2 flex justify-center gap-4">
            {/* <Link href="/terminos" className="hover:text-white">
              Términos y Condiciones
            </Link>
            <Link href="/privacidad" className="hover:text-white">
              Privacidad
            </Link>
            <Link href="/cookies" className="hover:text-white">
              Cookies
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
