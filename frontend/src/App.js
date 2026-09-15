import '@/App.css';
import { Toaster } from 'sonner';
import { LangProvider } from './i18n';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Values } from './components/Values';
import { Services } from './components/Services';
import { Goals } from './components/Goals';
import { Expertise } from './components/Expertise';
import { Portfolio } from './components/Portfolio';
import { Clients } from './components/Clients';
import { WhyUs } from './components/WhyUs';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <LangProvider>
      <div className="App bg-[#120818]" data-testid="app-root">
        <Toaster position="top-center" richColors />
        <Header />
        <main>
          <Hero />
          <About />
          <Values />
          <Services />
          <Goals />
          <Expertise />
          <Portfolio />
          <Clients />
          <WhyUs />
          <Contact />
        </main>
        <Footer />
      </div>
    </LangProvider>
  );
}

export default App;
