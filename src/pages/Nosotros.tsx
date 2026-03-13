import { BookOpen, Heart, Users, Shield } from "lucide-react";

/**
 * Componente de la página Nosotros.
 * Muestra la historia de la iglesia, liderazgo, misión y visión.
 */
export default function Nosotros() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-blue-900 py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestra Historia y Visión</h1>
        <p className="text-xl text-blue-200 max-w-2xl mx-auto px-4">
          Conoce el corazón detrás de La Iglesia de la Ciudad y nuestro compromiso con Barquisimeto.
        </p>
      </div>

      {/* Mission & Vision */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <BookOpen className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Nuestra Misión</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Vivir para Dios y guiar a otros a vivir para él. Creemos en un proceso de acompañamiento constante para que cada individuo alcance su máximo potencial según el diseño divino.
            </p>
          </div>
          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
              <Users className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Nuestra Visión</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Formando discípulos y familias felices. La unidad familiar es el eje gravitacional de toda nuestra acción ministerial.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <img
                src="https://github.com/AbejorroDigital/la-iglesia-de-la-ciudad-demo/blob/main/src/data/assets/pastor%20jos%C3%A9%20sanchez.png"
                alt="Retrato profesional y cálido del Apóstol José Sánchez, transmitiendo liderazgo y empatía"
                className="rounded-3xl shadow-lg object-cover w-full h-[500px]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-sm font-bold text-blue-600 tracking-wider uppercase mb-2">Liderazgo Principal</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Apóstol José Sánchez</h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Bajo su cobertura ministerial, La Iglesia de la Ciudad se ha posicionado como un centro de transformación integral que trasciende el modelo tradicional de congregación dominical.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Su liderazgo se caracteriza por un enfoque proactivo en el bienestar del individuo, promoviendo "hábitos de vencedores". Estos abarcan una disciplina mental y emocional donde el corazón y la mente están alineados con propósitos constructivos.
              </p>
              <div className="flex items-center space-x-4 text-slate-700 font-medium">
                <Shield className="w-6 h-6 text-blue-500" />
                <span>Enfoque en la salud mental, emocional y espiritual.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History - Teatro Venezuela */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Legado Arquitectónico</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            La reclamación de espacios urbanos para la transformación social y espiritual.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">El Antiguo Teatro Venezuela</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Nuestra sede ocupa una estructura de significativa relevancia histórica ubicada en la Avenida Venezuela. Construido a mediados del siglo XX por la compañía Luis Vivote, funcionó originalmente como un epicentro de las artes escénicas, el cine y los conciertos.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Hoy, este edificio es un símbolo de restauración urbana y espiritual. La arquitectura proporciona un escenario natural para la adoración contemporánea, aprovechando la acústica y la disposición espacial diseñada originalmente para el espectáculo, facilitando una experiencia litúrgica inmersiva.
            </p>
            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
              <h4 className="font-bold text-blue-900 mb-2">Datos Históricos</h4>
              <ul className="space-y-2 text-blue-800 text-sm">
                <li><strong>Nombre Original:</strong> Teatro Venezuela</li>
                <li><strong>Ubicación:</strong> Avenida Venezuela entre calles 27 y 28</li>
                <li><strong>Constructor:</strong> Compañía Luis Vivote</li>
                <li><strong>Uso Actual:</strong> Comunidad Evangélica / Sede de Iglesia</li>
              </ul>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img
              src="https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Fotografía arquitectónica del exterior del antiguo Teatro Venezuela, mostrando su fachada histórica restaurada"
              className="rounded-3xl shadow-lg object-cover w-full h-[600px]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
