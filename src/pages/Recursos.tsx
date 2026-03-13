import { PlayCircle, Download, FileText, Search } from "lucide-react";
import sermonsData from "../data/assets/sermons.json";
import resourcesData from "../data/assets/resources.json";
import dummyFileContent from "../data/assets/dummy.txt?raw";

/**
 * Componente de la página Recursos.
 * Muestra una biblioteca de prédicas pasadas, artículos y materiales descargables.
 */
export default function Recursos() {
  const handleDownload = (title: string) => {
    // Simulamos la descarga creando un Blob con el contenido del archivo dummy
    const blob = new Blob([dummyFileContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    
    // Creamos un elemento <a> temporal para forzar la descarga
    const a = document.createElement("a");
    a.href = url;
    // Formateamos el nombre del archivo basado en el título
    a.download = `${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.txt`;
    
    document.body.appendChild(a);
    a.click();
    
    // Limpieza
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-slate-900 py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Recursos para tu Crecimiento</h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto px-4">
          Prédicas, estudios y materiales para alimentar tu fe diaria.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Search Bar (Visual Only for now) */}
        <div className="max-w-2xl mx-auto mb-16 relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-12 pr-4 py-4 border border-slate-200 rounded-full leading-5 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-lg shadow-sm"
            placeholder="Buscar por tema, serie o predicador..."
          />
        </div>

        {/* Latest Series / Sermons */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-slate-900">Mensajes Recientes</h2>
            <a href="#" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">Ver todos</a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sermonsData.map((sermon) => (
              <div key={sermon.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col">
                <div className="relative aspect-video bg-slate-200 group cursor-pointer">
                  {/* Placeholder for video thumbnail */}
                  <img
                    src={`https://images.unsplash.com/photo-1438283173091-5dbf5c5a3206?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                    alt={`Miniatura del video: ${sermon.title}`}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <PlayCircle className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="text-sm font-semibold text-blue-600 mb-2">{sermon.series}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2">{sermon.title}</h3>
                  <p className="text-slate-500 text-sm mb-4">{sermon.date} • {sermon.speaker}</p>
                  <p className="text-slate-600 mb-6 line-clamp-3">{sermon.description}</p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {sermon.tags.map(tag => (
                      <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Downloadable Materials */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Materiales de Discipulado</h2>
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
            <ul className="divide-y divide-slate-100">
              {resourcesData.map((item, i) => (
                <li key={i} className="p-6 hover:bg-slate-50 transition-colors flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center mr-4">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.type} • {item.size}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleDownload(item.title)}
                    className="text-blue-600 hover:text-blue-800 p-2 rounded-full hover:bg-blue-50 transition-colors" 
                    aria-label={`Descargar ${item.title}`}
                  >
                    <Download className="w-6 h-6" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
