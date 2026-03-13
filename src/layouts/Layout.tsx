import { Link, Outlet } from "react-router-dom";
import { Menu, X, MapPin, Phone, Mail, Instagram, Youtube, Facebook } from "lucide-react";
import { useState } from "react";

/**
 * Componente principal de diseño (Layout) de la aplicación.
 * Proporciona una navegación y un pie de página consistentes en todas las páginas.
 */
export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Nosotros", path: "/nosotros" },
    { name: "Comunidad", path: "/comunidad" },
    { name: "Generaciones", path: "/generaciones" },
    { name: "Impacto Social", path: "/impacto-social" },
    { name: "Recursos", path: "/recursos" },
    { name: "Contacto", path: "/contacto" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900">
      {/* Top Bar - Contact Info */}
      <div className="bg-blue-900 text-white py-2 px-4 text-xs sm:text-sm hidden sm:flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" /> Av. Venezuela e/ 27 y 28, Barquisimeto</span>
          <span className="flex items-center"><Phone className="w-4 h-4 mr-1" /> +58 (XXX) XXX-XXXX</span>
        </div>
        <div className="flex items-center space-x-3">
          <a href="https://www.instagram.com/laiglesiadelaciudadbqto" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors" aria-label="Instagram">
            <Instagram className="w-4 h-4" />
          </a>
          <a href="https://www.facebook.com/laiglesiadelaciudad.bqto/?locale=es_LA" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors" aria-label="Facebook">
            <Facebook className="w-4 h-4" />
          </a>
          <a href="https://www.youtube.com/infodelaciudad/live" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors" aria-label="YouTube">
            <Youtube className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <img 
                  src="https://i.postimg.cc/NFm1qCjT/logo.jpg" 
                  alt="Logo oficial de La Iglesia de la Ciudad, diseño moderno y minimalista en tonos azules" 
                  className="h-12 w-auto mr-3 rounded-full"
                />
                <div className="flex flex-col">
                  <span className="font-bold text-xl text-blue-900 leading-tight">La Iglesia de la Ciudad</span>
                  <span className="text-xs text-slate-500 uppercase tracking-wider">Barquisimeto</span>
                </div>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex md:items-center md:space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-slate-600 hover:text-blue-700 font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/donar"
                className="bg-blue-600 text-white px-5 py-2.5 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-sm"
              >
                Donar
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                aria-expanded="false"
              >
                <span className="sr-only">Abrir menú principal</span>
                {isMobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 shadow-lg absolute w-full">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-700 hover:bg-slate-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/donar"
                className="block w-full text-center mt-4 bg-blue-600 text-white px-5 py-3 rounded-md font-medium hover:bg-blue-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Donar
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <img 
                  src="https://i.postimg.cc/NFm1qCjT/logo.jpg" 
                  alt="Logo oficial de La Iglesia de la Ciudad, versión monocromática clara para fondos oscuros" 
                  className="h-10 w-auto mr-3 rounded-full"
                />
                <span className="font-bold text-xl text-white">La Iglesia de la Ciudad</span>
              </div>
              <p className="text-sm mb-6 max-w-md">
                Formando Discípulos y Familias Felices. Vivir para Dios y guiar a otros a vivir para él.
                Ubicados en el histórico Antiguo Teatro Venezuela, un espacio redimido para la esperanza comunitaria.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/laiglesiadelaciudadbqto" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="https://www.facebook.com/laiglesiadelaciudad.bqto/?locale=es_LA" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="https://www.youtube.com/infodelaciudad/live" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                  <span className="sr-only">YouTube</span>
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/nosotros" className="hover:text-white transition-colors">Sobre Nosotros</Link></li>
                <li><Link to="/comunidad" className="hover:text-white transition-colors">Grupos Pequeños</Link></li>
                <li><Link to="/generaciones" className="hover:text-white transition-colors">Zona de Campeones</Link></li>
                <li><Link to="/impacto-social" className="hover:text-white transition-colors">Banco de Alimentos</Link></li>
                <li><Link to="/contacto" className="hover:text-white transition-colors">Contacto y Consejería</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Visítanos</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 text-slate-500 shrink-0" />
                  <span>Antiguo Teatro Venezuela<br/>Av. Venezuela entre calles 27 y 28<br/>Barquisimeto, Edo. Lara</span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-slate-500 shrink-0" />
                  <span>+58 (XXX) XXX-XXXX</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-slate-500 shrink-0" />
                  <span>contacto@iglesiadelaciudad.net</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-800 text-sm text-center flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} La Iglesia de la Ciudad. Todos los derechos reservados.</p>
            <p className="mt-2 md:mt-0 text-slate-500">
              Desarrollado con propósito por <a href="mailto:abejorrodigital@gmail.com" className="text-blue-400 hover:text-blue-300">Abejorro Digital</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
