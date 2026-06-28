import { Code2 } from 'lucide-react';
import { profile, socialLinks } from '../data/portfolio';

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container-shell flex flex-col gap-5 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-violet-500/10 text-violet-300">
            <Code2 size={20} />
          </span>
          <span>© 2026 {profile.name}. Todos os direitos reservados.</span>
        </div>
        <div className="flex gap-4">
          {socialLinks.slice(0, 3).map((link) => {
            const Icon = link.icon;
            return (
              <a key={link.label} href={link.href} aria-label={link.label} className="text-slate-400 transition hover:text-violet-300">
                <Icon size={20} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
