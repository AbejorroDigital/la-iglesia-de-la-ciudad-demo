/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Comunidad from "./pages/Comunidad";
import Generaciones from "./pages/Generaciones";
import ImpactoSocial from "./pages/ImpactoSocial";
import Recursos from "./pages/Recursos";
import Contacto from "./pages/Contacto";
import Donar from "./pages/Donar";
import { initBackgroundMusic } from "./lib/utils";

/**
 * Componente principal de la aplicación.
 * Configura el enrutamiento para la aplicación web.
 */
export default function App() {
  useEffect(() => {
    // Cambia a false para desactivar la música de fondo
    initBackgroundMusic(true);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="comunidad" element={<Comunidad />} />
          <Route path="generaciones" element={<Generaciones />} />
          <Route path="impacto-social" element={<ImpactoSocial />} />
          <Route path="recursos" element={<Recursos />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="donar" element={<Donar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
