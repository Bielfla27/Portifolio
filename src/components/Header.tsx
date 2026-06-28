import { Menu, X, Code2, Download } from 'lucide-react';
import { useState } from 'react';
import { navItems, profile } from '../data/portfolio';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const cvUrl = `${import.meta.env.BASE_URL}cv-gabriel-felix.pdf`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-night/75 backdrop-blur-2xl">
      <div className="container-shell flex h-20 items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Inicio">
          <span className="grid h-11 w-11 place-items-center rounded-xl border border-violet-400/30 bg-violet-500/10 text-violet-300 shadow-glow">
            <Code2 size={24} />
          </span>
          <span>
            <strong className="block text-lg font-bold leading-tight text-white">{profile.name}</strong>
            <span className="text-sm text-violet-300">{profile.shortRole}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Menu principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-violet-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={cvUrl}
            className="inline-flex h-11 items-center gap-2 rounded-lg bg-violet-600 px-4 text-sm font-semibold text-white shadow-glow transition hover:bg-violet-500"
          >
            Baixar CV <Download size={16} />
          </a>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-lg border border-white/10 bg-white/5 text-white lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-night/95 px-5 py-5 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-4" aria-label="Menu mobile">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-2 py-2 text-sm font-semibold text-slate-200 hover:bg-white/5"
              >
                {item.label}
              </a>
            ))}
            <a
              href={cvUrl}
              className="mt-2 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-violet-600 px-4 text-sm font-semibold text-white"
            >
              Baixar CV <Download size={16} />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
