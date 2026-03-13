import { MapPin, Phone, Mail, Clock, Send, AlertCircle, CheckCircle2 } from "lucide-react";
import React, { useState } from "react";

/**
 * Componente de la página Contacto.
 * Muestra información de contacto, un formulario y detalles de ubicación.
 */
export default function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Información General",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "El correo es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ingresa un correo electrónico válido";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "El teléfono es requerido";
    } else if (!/^[0-9+\-\s()]+$/.test(formData.phone)) {
      newErrors.phone = "El teléfono solo debe contener números y símbolos (+, -, ())";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "El mensaje no puede estar vacío";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Aquí iría la lógica para enviar el formulario a un backend
      console.log("Formulario enviado:", formData);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "Información General",
        message: ""
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-slate-900 py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contáctanos</h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto px-4">
          Estamos aquí para escucharte, orar por ti y acompañarte.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Información de Contacto</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-blue-100 text-blue-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-slate-900">Ubicación Principal</h3>
                  <p className="mt-2 text-base text-slate-500">
                    Antiguo Teatro Venezuela<br />
                    Avenida Venezuela entre calles 27 y 28<br />
                    Barquisimeto, Estado Lara
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-emerald-100 text-emerald-600">
                    <Phone className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-slate-900">Teléfono y WhatsApp</h3>
                  <p className="mt-2 text-base text-slate-500">
                    +58 (XXX) XXX-XXXX<br />
                    <span className="text-sm text-slate-400">Disponible para consejería pastoral</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-amber-100 text-amber-600">
                    <Clock className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-slate-900">Horarios de Atención</h3>
                  <p className="mt-2 text-base text-slate-500">
                    <strong>Lunes a Sábado:</strong> 8:00 AM - 10:00 AM (Atención Ministerial)<br />
                    <strong>Domingo:</strong> 9:00 AM - 1:30 PM (Celebración General)
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-rose-100 text-rose-600">
                    <Mail className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-slate-900">Correo Electrónico</h3>
                  <p className="mt-2 text-base text-slate-500">
                    contacto@iglesiadelaciudad.net
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Envíanos un Mensaje</h3>
            
            {isSubmitted && (
              <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0 mt-0.5" />
                <p className="text-emerald-800 text-sm">¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">Nombre Completo</label>
                <div className="mt-1 relative">
                  <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className={`py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 rounded-xl bg-slate-50 ${errors.name ? 'border-rose-500' : 'border-slate-300'}`} 
                    placeholder="Ej. Juan Pérez" 
                  />
                  {errors.name && (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <AlertCircle className="h-5 w-5 text-rose-500" />
                    </div>
                  )}
                </div>
                {errors.name && <p className="mt-1 text-sm text-rose-500">{errors.name}</p>}
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700">Correo Electrónico</label>
                  <div className="mt-1 relative">
                    <input 
                      id="email" 
                      name="email" 
                      type="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className={`py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 rounded-xl bg-slate-50 ${errors.email ? 'border-rose-500' : 'border-slate-300'}`} 
                      placeholder="juan@ejemplo.com" 
                    />
                    {errors.email && (
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <AlertCircle className="h-5 w-5 text-rose-500" />
                      </div>
                    )}
                  </div>
                  {errors.email && <p className="mt-1 text-sm text-rose-500">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Teléfono</label>
                  <div className="mt-1 relative">
                    <input 
                      type="tel" 
                      name="phone" 
                      id="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      className={`py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 rounded-xl bg-slate-50 ${errors.phone ? 'border-rose-500' : 'border-slate-300'}`} 
                      placeholder="+58 412 1234567" 
                    />
                    {errors.phone && (
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <AlertCircle className="h-5 w-5 text-rose-500" />
                      </div>
                    )}
                  </div>
                  {errors.phone && <p className="mt-1 text-sm text-rose-500">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700">Asunto</label>
                <div className="mt-1">
                  <select 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-slate-300 rounded-xl bg-slate-50"
                  >
                    <option>Información General</option>
                    <option>Petición de Oración</option>
                    <option>Consejería Pastoral</option>
                    <option>Voluntariado</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">Mensaje</label>
                <div className="mt-1 relative">
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    value={formData.message}
                    onChange={handleChange}
                    className={`py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 rounded-xl bg-slate-50 ${errors.message ? 'border-rose-500' : 'border-slate-300'}`} 
                    placeholder="¿En qué podemos ayudarte?"
                  ></textarea>
                  {errors.message && (
                    <div className="absolute top-3 right-0 pr-3 flex items-center pointer-events-none">
                      <AlertCircle className="h-5 w-5 text-rose-500" />
                    </div>
                  )}
                </div>
                {errors.message && <p className="mt-1 text-sm text-rose-500">{errors.message}</p>}
              </div>

              <div>
                <button type="submit" className="w-full inline-flex justify-center items-center py-4 px-6 border border-transparent shadow-sm text-base font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                  <Send className="w-5 h-5 mr-2" />
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16 bg-slate-200 rounded-3xl h-[400px] flex items-center justify-center border-4 border-white shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-50 mix-blend-overlay"></div>
          <div className="relative z-10 text-center p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg max-w-sm">
            <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Ubicación en Mapa</h3>
            <p className="text-slate-600 text-sm">Integración con Google Maps próximamente para navegación directa.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
