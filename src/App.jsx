import React from 'react';
import NavbarOni from './components/NavbarOni';
import HeroOni from './components/HeroOni';
import ServiciosOni from './components/ServiciosOni';
import PortfolioOni from './components/PortfolioOni';

export default function App() {
  return (
    <div className="bg-[#0A0A0E] min-h-screen text-white font-sans selection:bg-purple-600 selection:text-white overflow-x-hidden">
      <NavbarOni />
      <main>
        <HeroOni />
        <ServiciosOni />
        <PortfolioOni />
      </main>
    </div>
  );
}