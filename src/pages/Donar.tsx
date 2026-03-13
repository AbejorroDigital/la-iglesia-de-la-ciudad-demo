import { Heart, CreditCard, Building, ArrowRight } from "lucide-react";

/**
 * Componente de la página Donar.
 * Proporciona información sobre cómo apoyar financieramente a la iglesia.
 */
export default function Donar() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-blue-900 py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Siembra con Propósito</h1>
        <p className="text-xl text-blue-200 max-w-2xl mx-auto px-4">
          Tu generosidad hace posible nuestra labor en la ciudad.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heart className="w-16 h-16 text-rose-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Apoya Nuestra Misión</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Cada aporte nos permite seguir formando discípulos, manteniendo nuestro banco de alimentos, el consultorio médico y las academias deportivas. Creemos en la transparencia y en el uso responsable de cada recurso que Dios provee a través de ti.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Transferencia Bancaria */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
              <Building className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Transferencia Nacional</h3>
            <p className="text-slate-600 mb-6">Aportes en moneda local (Bolívares) a través de transferencia bancaria o pago móvil.</p>
            
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3 text-sm">
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">Banco:</span>
                <span className="font-medium text-slate-900">Banco Mercantil</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">Cuenta:</span>
                <span className="font-medium text-slate-900">0105-XXXX-XXXX-XXXX</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">A nombre de:</span>
                <span className="font-medium text-slate-900">Iglesia de la Ciudad</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">RIF:</span>
                <span className="font-medium text-slate-900">J-XXXXXXXX-X</span>
              </div>
            </div>
            
            <div className="mt-6 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3 text-sm">
              <h4 className="font-bold text-slate-900 mb-2">Pago Móvil</h4>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">Banco:</span>
                <span className="font-medium text-slate-900">Mercantil (0105)</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">Teléfono:</span>
                <span className="font-medium text-slate-900">0414-XXXXXXX</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">RIF:</span>
                <span className="font-medium text-slate-900">J-XXXXXXXX-X</span>
              </div>
            </div>
          </div>

          {/* Donación Internacional */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <CreditCard className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Aportes Internacionales</h3>
            <p className="text-slate-600 mb-6">Si te encuentras fuera de Venezuela o deseas aportar en divisas, puedes hacerlo a través de nuestras plataformas seguras.</p>
            
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between bg-blue-50 hover:bg-blue-100 text-blue-900 p-4 rounded-2xl border border-blue-200 transition-colors">
                <span className="font-bold">Zelle</span>
                <ArrowRight className="w-5 h-5 text-blue-500" />
              </button>
              <button className="w-full flex items-center justify-between bg-emerald-50 hover:bg-emerald-100 text-emerald-900 p-4 rounded-2xl border border-emerald-200 transition-colors">
                <span className="font-bold">PayPal</span>
                <ArrowRight className="w-5 h-5 text-emerald-500" />
              </button>
              <button className="w-full flex items-center justify-between bg-slate-50 hover:bg-slate-100 text-slate-900 p-4 rounded-2xl border border-slate-200 transition-colors">
                <span className="font-bold">Tarjeta de Crédito / Débito</span>
                <ArrowRight className="w-5 h-5 text-slate-500" />
              </button>
            </div>
            
            <div className="mt-8 p-4 bg-amber-50 rounded-2xl border border-amber-100">
              <p className="text-sm text-amber-800 text-center">
                Para reportar tu donación o solicitar un recibo, por favor envíanos un correo a <strong>donaciones@iglesiadelaciudad.net</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
