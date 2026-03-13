# Informe Estratégico: Recomendaciones para La Iglesia de la Ciudad

Este documento contiene un análisis y propuestas técnicas, de diseño y de mantenimiento para asegurar que la plataforma web de La Iglesia de la Ciudad no solo sea un folleto digital, sino una herramienta activa de conexión comunitaria.

## 1. Sugerencias de UX/UI para Retención de Nuevos Visitantes

*   **"Casa Abierta" Digital:** El diseño actual utiliza colores cálidos (azules, esmeraldas, ámbar) y tipografías legibles (Inter). Para mejorar la retención, se sugiere implementar un "Tour Virtual" del Antiguo Teatro Venezuela en la página de inicio. Esto reduce la ansiedad de los nuevos visitantes al mostrarles exactamente cómo es el espacio antes de asistir.
*   **Micro-interacciones de Bienvenida:** Cuando un usuario visita la página por primera vez, un pequeño pop-up no intrusivo (esquina inferior) podría ofrecer un mensaje personalizado del Apóstol José Sánchez: "¡Hola! Si es tu primera vez aquí, nos encantaría conocerte. Haz clic aquí para conectarte con un líder."
*   **Accesibilidad (WCAG 2.1):** Asegurar que el contraste de colores sea alto, que todas las imágenes tengan atributos `alt` descriptivos (como ya se ha implementado en la estructura base), y que la navegación por teclado sea fluida. Esto refleja el valor cristiano de la inclusión.
*   **Velocidad de Carga (Mobile-First):** Dado el contexto de conectividad en Venezuela, la optimización de imágenes es crítica. Se recomienda usar formatos WebP y carga diferida (lazy loading) para todas las galerías y videos.

## 2. Propuestas de Funciones Futuras (Fase 2)

Para potenciar la autonomía de la organización y facilitar la participación activa, se proponen las siguientes integraciones:

*   **Sistema de Donaciones Integrado:** Actualmente, la página `/donar` muestra información bancaria estática. En el futuro, integrar una pasarela de pago (como Stripe para donaciones internacionales o un sistema local compatible con Pago Móvil) directamente en la web reducirá la fricción y aumentará la recaudación para el Banco de Alimentos.
*   **Reserva de Consejería Pastoral:** Implementar un sistema de agendamiento (tipo Calendly o un desarrollo a medida simple) en la página de Contacto. Esto permitiría a los miembros reservar citas de 30 minutos con los líderes de forma privada y organizada.
*   **Directorio de Emprendedores (Portal del Emprendedor):** Una sección dedicada donde los miembros de la congregación puedan listar sus negocios y servicios, fomentando la economía circular dentro de la comunidad.
*   **Mapa de Células Dinámico:** Reemplazar el placeholder actual en `/comunidad` por un mapa interactivo (Google Maps API o Mapbox) donde los usuarios puedan filtrar grupos pequeños por zona (Este, Oeste, Cabudare), edad o afinidad, y solicitar unirse con un solo clic.
*   **Integración con Redes Sociales:** Un feed en vivo de Instagram en la página de inicio para mostrar la actividad diaria y mantener el sitio fresco sin esfuerzo adicional de actualización.

## 3. Plan de Mantenimiento Técnico y Actualización de Contenidos

El desarrollo no es un fin, sino un puente. Para que este puente se mantenga firme a largo plazo sin depender excesivamente de un equipo técnico externo:

*   **Gestión de Datos (JSON a CMS):** La arquitectura actual utiliza archivos JSON (`src/data/`) para gestionar eventos, sermones y generaciones. Esto es excelente para empezar. A mediano plazo, se recomienda migrar estos datos a un Headless CMS (como Sanity, Strapi o Firebase). Esto permitirá al equipo de comunicaciones (incluso sin conocimientos de programación) actualizar los horarios, subir nuevos videos de YouTube y publicar noticias a través de una interfaz amigable.
*   **Capacitación Interna:** Crear un manual en video (screencast) de 15 minutos enseñando a 2 o 3 voluntarios de la iglesia cómo modificar los archivos JSON básicos o usar el futuro CMS.
*   **Auditoría Trimestral:** Programar una revisión cada 3 meses para:
    *   Verificar que los enlaces de YouTube de las prédicas sigan activos.
    *   Actualizar las estadísticas del Banco de Alimentos (comidas servidas).
    *   Revisar la seguridad y actualizar las dependencias de React/Vite.

---
*Desarrollado con propósito por [Abejorro Digital](mailto:abejorrodigital@gmail.com)*
