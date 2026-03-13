import { Map, Users, HeartHandshake, MessageCircle } from "lucide-react";

/**
 * Componente de la página Comunidad.
 * Detalla la estrategia de grupos pequeños (células) y la vida en comunidad.
 */
export default function Comunidad() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-emerald-900 py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Vida Comunitaria</h1>
        <p className="text-xl text-emerald-200 max-w-2xl mx-auto px-4">
          Conéctate, crece y sirve a través de nuestros grupos pequeños.
        </p>
      </div>

      {/* Intro */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Estructura de Discipulado</h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          El núcleo del crecimiento y la estabilidad de La Iglesia de la Ciudad reside en nuestro modelo de discipulado basado en células. Esta estrategia nos permite descentralizarnos y penetrar en los diferentes estratos de la sociedad barquisimetana, llevando un mensaje de esperanza directamente a los hogares.
        </p>
      </section>

      {/* Features */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
              <div className="w-16 h-16 mx-auto bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Grupos por Afinidad</h3>
              <p className="text-slate-600">
                Organizados para jóvenes, matrimonios, adultos mayores, garantizando un acompañamiento pertinente a cada etapa de vida.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
              <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
                <HeartHandshake className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Cuidado Pastoral</h3>
              <p className="text-slate-600">
                Cada grupo cuenta con un líder responsable encargado del cuidado directo, apoyo en crisis y desarrollo de talentos.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
              <div className="w-16 h-16 mx-auto bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Entorno Íntimo</h3>
              <p className="text-slate-600">
                Reuniones semanales de 90 minutos en hogares, oficinas o espacios públicos para orar, estudiar la Biblia y apoyarse mutuamente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Encuentra tu Célula</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Nuestra red de células se extiende por todo Barquisimeto. Utiliza nuestro mapa interactivo para localizar el grupo más cercano a tu residencia o lugar de trabajo.
            </p>
            <button className="bg-emerald-600 text-white px-8 py-4 rounded-full font-medium hover:bg-emerald-700 transition-colors shadow-md flex items-center">
              <Map className="w-5 h-5 mr-2" />
              Ver Mapa Interactivo
            </button>
          </div>
          <div className="w-full lg:w-1/2 bg-slate-200 rounded-3xl h-[400px] flex items-center justify-center border-4 border-white shadow-xl relative overflow-hidden">
            {/* Placeholder for actual interactive map */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-50 mix-blend-overlay"></div>
            <div className="relative z-10 text-center p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg max-w-sm">
              <Map className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Mapa de Células</h3>
              <p className="text-slate-600 text-sm">Integración con Google Maps próximamente para ubicar grupos en tiempo real.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
