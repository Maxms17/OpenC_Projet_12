import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client'; 

import Home from './pages/Home/Home';
import Projet from './pages/Projet/Projet';
import Contact from './pages/Contact/Contact';
import Erreur from './pages/Erreur/Erreur';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement); 

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projet/:id" element={<Projet />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<Erreur />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
