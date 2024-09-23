import "./pages/Home/home";
import Home from './pages/Home/home';
import Musicas from "./pages/Musicas/Musicas";
import React from 'react';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Musicas />
  </React.StrictMode>
);
