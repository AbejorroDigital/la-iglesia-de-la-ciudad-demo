import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Función de utilidad para fusionar clases de Tailwind de forma segura.
 * @param {...ClassValue[]} inputs - Las clases a fusionar.
 * @returns {string} La cadena de clases fusionada.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Inicializa la música de fondo de la aplicación.
 * @param enabled - Si es true, la música se reproducirá tras la primera interacción del usuario.
 */
export function initBackgroundMusic(enabled: boolean = true) {
  if (!enabled) return;

  // Evitar inicializar múltiples veces
  if (document.getElementById('bg-music-player')) return;

  // URL de ejemplo: Música suave y relajante (Aria de las Variaciones Goldberg de Bach - Dominio Público)
  const audioUrl = 'https://upload.wikimedia.org/wikipedia/commons/b/b5/J._S._Bach_-_Goldberg_Variations_-_01_-_Aria.ogg';
  
  const audio = new Audio(audioUrl);
  audio.id = 'bg-music-player';
  audio.loop = true;
  audio.volume = 0.05; // Volumen muy suave (5%) para no ser invasivo

  // Los navegadores bloquean el autoplay, así que esperamos a la primera interacción
  const playOnInteraction = () => {
    audio.play().catch(error => {
      console.log("Autoplay bloqueado o error al reproducir:", error);
    });
    // Remover los listeners una vez que intentamos reproducir
    document.removeEventListener('click', playOnInteraction);
    document.removeEventListener('keydown', playOnInteraction);
    document.removeEventListener('scroll', playOnInteraction);
  };

  document.addEventListener('click', playOnInteraction);
  document.addEventListener('keydown', playOnInteraction);
  document.addEventListener('scroll', playOnInteraction, { once: true });
}
