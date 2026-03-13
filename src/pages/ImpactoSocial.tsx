import { Heart, Stethoscope, Utensils, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * Componente de la página Impacto Social.
 * Detalla el banco de alimentos, consultorio médico y otras iniciativas comunitarias.
 */
export default function ImpactoSocial() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-rose-900 py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Una Iglesia con Manos</h1>
        <p className="text-xl text-rose-200 max-w-2xl mx-auto px-4">
          El evangelio predicado con acciones tangibles que alivian el sufrimiento humano.
        </p>
      </div>

      {/* Main Content */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="w-16 h-16 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center mb-6">
              <Utensils className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Banco de Alimentos</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              El pilar de nuestra labor social es el centro de nutrición comunitaria. Diariamente, proveemos entre 300 y 400 almuerzos a las personas más vulnerables de nuestra comunidad.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              No es asistencialismo aislado, sino un programa integral. Mantenemos un censo constante de niños con bajo peso y desnutrición para brindarles seguimiento estricto, colaborando con instituciones educativas locales.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1593113514676-5f8b4cbdf1d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Voluntarios sirviendo comida caliente en el banco de alimentos, mostrando compasión y servicio"
              className="rounded-3xl shadow-lg object-cover w-full h-[400px]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-row-reverse">
          <div className="order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Médico atendiendo a un paciente en el consultorio de la iglesia, reflejando cuidado y profesionalismo"
              className="rounded-3xl shadow-lg object-cover w-full h-[400px]"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center mb-6">
              <Stethoscope className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Consultorio Médico</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Complementando la nutrición, hemos establecido un consultorio médico dentro de nuestras instalaciones.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Ofrecemos atención primaria de salud a los habitantes de Cerritos Blancos y sectores adyacentes, una zona con altas necesidades de servicios médicos básicos.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-16 h-16 text-rose-500 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Súmate a la Misión</h2>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            Nuestra labor es posible gracias a la generosidad de personas como tú. Tu aporte, ya sea en tiempo o recursos, transforma vidas en Barquisimeto.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/donar"
              className="bg-rose-600 text-white px-8 py-4 rounded-full font-medium hover:bg-rose-700 transition-colors shadow-md text-lg flex items-center justify-center"
            >
              Hacer una Donación
            </Link>
            <Link
              to="/contacto"
              className="bg-white text-slate-700 border border-slate-300 px-8 py-4 rounded-full font-medium hover:bg-slate-50 transition-colors shadow-sm text-lg flex items-center justify-center"
            >
              Ser Voluntario
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
