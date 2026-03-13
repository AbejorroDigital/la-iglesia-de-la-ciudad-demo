# La Iglesia de la Ciudad - Plataforma Web

## Descripción del Sitio y Propósito
Esta aplicación web es la plataforma digital oficial de "La Iglesia de la Ciudad", ubicada en Barquisimeto, Venezuela. Diseñada bajo un enfoque "Mobile-First" y con una estética minimalista, moderna y acogedora, la web busca ser una extensión de la comunidad física. 

El propósito principal es facilitar la conexión humana, informar sobre las actividades de la iglesia (como la Zona de Campeones, academias y el banco de alimentos), y proveer recursos espirituales. La arquitectura está pensada para ser escalable, accesible y fácil de mantener por el equipo de comunicaciones de la iglesia.

## Instrucciones de Instalación y Despliegue

### Requisitos Previos
- Node.js (v18 o superior)
- npm o yarn

### Instalación Local
1. Clona el repositorio.
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Abre `http://localhost:3000` en tu navegador.

### Despliegue (Producción)
Para construir la aplicación para producción:
```bash
npm run build
```
Esto generará una carpeta `dist/` con los archivos estáticos optimizados, listos para ser alojados en cualquier servicio de hosting estático (Vercel, Netlify, Firebase Hosting, etc.).

## Arquitectura de la Información

La aplicación está estructurada en las siguientes secciones principales, accesibles desde la navegación global:

1. **Inicio (`/`)**: Banner principal, acceso a transmisión en vivo, contadores de impacto social y horarios de servicio.
2. **Nosotros (`/nosotros`)**: Historia del Antiguo Teatro Venezuela, biografía del Apóstol José Sánchez, misión y visión.
3. **Comunidad (`/comunidad`)**: Información sobre los grupos pequeños (células) y mapa de ubicación.
4. **Generaciones (`/generaciones`)**: Detalles de la "Zona de Campeones" (ministerio infantil) y academias juveniles.
5. **Impacto Social (`/impacto-social`)**: Información sobre el banco de alimentos y el consultorio médico.
6. **Recursos (`/recursos`)**: Archivo de prédicas (videos) y materiales descargables (PDFs).
7. **Contacto (`/contacto`)**: Formulario de contacto, ubicación en Google Maps y horarios.
8. **Donar (`/donar`)**: Información bancaria y plataformas para aportes nacionales e internacionales.

---
*Desarrollado con propósito por [Abejorro Digital](mailto:abejorrodigital@gmail.com)*
