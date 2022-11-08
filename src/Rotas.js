import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Formulary from './pages/Formulary'
import NFound from './pages/NFound'
import Header from './Components/Header';

const Rotas = () => {
  return (
    <BrowserRouter>
    <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Formulario" element={<Formulary />} />
          <Route path="*" element={<NFound />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Rotas