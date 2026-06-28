import { About } from './components/About';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-night text-slate-100">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(139,92,246,0.18),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(56,189,248,0.14),transparent_25%),linear-gradient(180deg,#05070d_0%,#080b13_45%,#05070d_100%)]" />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
