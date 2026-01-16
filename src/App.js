import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Consulta from './pages/Consulta';
import Script from './pages/Script';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Consulta />} />
        <Route path="/script" element={<Script />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
