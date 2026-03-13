import { Link } from "react-router-dom";
import { PlayCircle, Heart, Users, Calendar, ArrowRight, MapPin } from "lucide-react";
import eventsData from "../data/events.json";

/**
 * Componente de la página de Inicio.
 * Presenta una sección principal (hero), enlace a la transmisión en vivo, contadores de impacto social y próximos eventos.
 */
export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        {/* Placeholder for Hero Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Foto de gran angular de la congregación en un ambiente cálido con iluminación moderna, adorando juntos"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-48 flex flex-col items-center text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-900/50 border border-blue-500/30 text-blue-200 text-sm font-medium tracking-wider mb-6 backdrop-blur-sm">
            Bienvenidos a Casa
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-4xl">
            Formando Discípulos y <span className="text-blue-400">Familias Felices</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl">
            Vivir para Dios y guiar a otros a vivir para él. Únete a nuestra comunidad en el corazón de Barquisimeto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              to="/nosotros"
              className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-medium transition-all shadow-lg shadow-blue-900/20 text-lg flex items-center justify-center"
            >
              Conócenos
            </Link>
            <a
              href="https://www.youtube.com/infodelaciudad/live"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-medium transition-all text-lg flex items-center justify-center"
            >
              <PlayCircle className="w-5 h-5 mr-2" />
              Ver en Vivo
            </a>
          </div>
        </div>
      </section>

      {/* Social Impact Counters */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900">Una Iglesia con Manos</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              El evangelio predicado con acciones tangibles que alivian el sufrimiento humano en nuestra ciudad.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 rounded-2xl bg-blue-50 border border-blue-100">
              <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold text-blue-900 mb-2">+400</div>
              <div className="text-slate-600 font-medium">Almuerzos Diarios</div>
              <p className="text-sm text-slate-500 mt-2">A través de nuestro Banco de Alimentos</p>
            </div>
            <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-100">
              <div className="w-16 h-16 mx-auto bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold text-emerald-900 mb-2">+150</div>
              <div className="text-slate-600 font-medium">Niños Atendidos</div>
              <p className="text-sm text-slate-500 mt-2">En la Zona de Campeones y Academias</p>
            </div>
            <div className="p-8 rounded-2xl bg-amber-50 border border-amber-100">
              <div className="w-16 h-16 mx-auto bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-4">
                <Calendar className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold text-amber-900 mb-2">24/7</div>
              <div className="text-slate-600 font-medium">Acompañamiento</div>
              <p className="text-sm text-slate-500 mt-2">A través de nuestras células familiares</p>
            </div>
          </div>
          <div className="mt-10 text-center">
            <Link to="/impacto-social" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
              Conoce más sobre nuestra fundación <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events / Schedule */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-slate-900">Nuestros Horarios</h2>
              <p className="mt-4 text-lg text-slate-600">
                Te esperamos en el Antiguo Teatro Venezuela. Un espacio histórico redimido para la formación de valores.
              </p>
            </div>
            <Link to="/contacto" className="mt-6 md:mt-0 inline-flex items-center px-6 py-3 border border-slate-300 shadow-sm text-base font-medium rounded-full text-slate-700 bg-white hover:bg-slate-50 transition-colors">
              Ver Ubicación
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {eventsData.map((event) => (
              <div key={event.id} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-sm font-semibold text-blue-600 tracking-wide uppercase">{event.date}</span>
                    <h3 className="mt-2 text-2xl font-bold text-slate-900">{event.title}</h3>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-slate-100 text-slate-800">
                      {event.time}
                    </span>
                  </div>
                </div>
                <p className="mt-4 text-slate-600">{event.description}</p>
                <div className="mt-6 flex items-center text-sm text-slate-500">
                  <MapPin className="flex-shrink-0 mr-1.5 h-5 w-5 text-slate-400" />
                  {event.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
