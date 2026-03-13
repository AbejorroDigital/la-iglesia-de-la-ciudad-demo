import { Baby, GraduationCap, Trophy, Users, BookOpen } from "lucide-react";
import generationsData from "../data/generations.json";

/**
 * Componente de la página Generaciones.
 * Detalla la Zona de Campeones (ministerio infantil) y academias juveniles.
 */
export default function Generaciones() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-amber-500 py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Zona de Campeones</h1>
        <p className="text-xl text-amber-100 max-w-2xl mx-auto px-4">
          Formación infantil y juvenil: una escuela de valores y principios bíblicos.
        </p>
      </div>

      {/* Intro */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Más que una guardería</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              La Iglesia de la Ciudad ha desarrollado uno de los programas de formación infantil más robustos de la región. Operamos en una infraestructura dedicada de tres pisos, diseñada para satisfacer las necesidades educativas y espirituales de los niños según su rango de edad.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Nuestra pedagogía es multidimensional. Para los más pequeños, el enfoque es altamente visual y táctil. Para los adolescentes, nos centramos en la identidad, el propósito y el liderazgo.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Niños sonrientes participando en actividades interactivas en un salón colorido y seguro de la Zona de Campeones"
              className="rounded-3xl shadow-lg object-cover w-full h-[400px]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Structure Table / Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Estructura del Programa</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Adaptamos nuestro currículo a las capacidades cognitivas de cada etapa del desarrollo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {generationsData.map((level, index) => (
              <div key={level.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-4">
                  {index === 0 && <Baby className="w-6 h-6" />}
                  {index === 1 && <Trophy className="w-6 h-6" />}
                  {index === 2 && <GraduationCap className="w-6 h-6" />}
                  {index === 3 && <Users className="w-6 h-6" />}
                  {index === 4 && <BookOpen className="w-6 h-6" />}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{level.name}</h3>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 mb-4">
                  {level.ageRange}
                </span>
                <p className="text-slate-600">{level.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academies & Youth Talent */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-900 rounded-3xl overflow-hidden shadow-2xl">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 p-12 lg:p-16 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Academias y Desarrollo de Talentos</h2>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Impulsamos academias que funcionan como escuelas de formación en diversas disciplinas. Buscamos la excelencia técnica, utilizando el deporte y el arte como herramientas de disciplina y prevención social para los jóvenes de Barquisimeto.
              </p>
              <ul className="space-y-4 mb-8 text-blue-50">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                  <strong>Deportes:</strong> Fútbol, baloncesto, béisbol y karate.
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                  <strong>Artes:</strong> Música y danza (alimentando al equipo de alabanza).
                </li>
              </ul>
              <button className="bg-amber-500 text-white px-8 py-4 rounded-full font-medium hover:bg-amber-600 transition-colors shadow-md self-start">
                Inscripciones Abiertas
              </button>
            </div>
            <div className="w-full lg:w-1/2 relative min-h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Jóvenes participando activamente en una academia deportiva, mostrando compañerismo y disciplina"
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-transparent lg:w-1/3"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
