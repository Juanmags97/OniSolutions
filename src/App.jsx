import NavbarOni from './components/NavbarOni';
import HeroOni from './components/HeroOni';
import ServiciosOni from './components/ServiciosOni';
import MobileAppsOni from './components/MobileAppsOni';
import PortfolioOni from './components/PortfolioOni';
import SobreMi from './components/SobreMiOni.jsx';
import FooterOni from './components/FooterOni.jsx';

export default function App() {
  return (
    <div className="bg-[#0A0A0E] min-h-screen text-white font-sans selection:bg-purple-600 selection:text-white overflow-x-hidden">
      <NavbarOni />
      <main>
        <HeroOni />
        <ServiciosOni />
        <MobileAppsOni />
        <SobreMi />
        <PortfolioOni />
      </main>
      <FooterOni />
    </div>
  );
}
