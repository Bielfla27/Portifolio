import { UserRound } from 'lucide-react';
import { highlights, profile } from '../data/portfolio';
import { Section } from './Section';

export function About() {
  return (
    <Section id="sobre" className="pt-8">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <span className="section-kicker">
            <UserRound size={18} /> Sobre mim
          </span>
          <h2 className="section-title">Full stack com base forte em Java</h2>
          <div className="mt-8 flex flex-col gap-7 sm:flex-row lg:flex-col xl:flex-row">
            <div className="mx-auto h-44 w-44 shrink-0 overflow-hidden rounded-full border-2 border-violet-400/70 bg-gradient-to-br from-violet-500/35 to-electric/20 p-1 shadow-glow sm:mx-0">
              <img
                src={profile.image}
                alt="Foto de perfil de Gabriel Felix"
                className="h-full w-full rounded-full object-cover object-[58%_42%]"
              />
            </div>
            <p className="text-lg leading-8 text-slate-300">{profile.about}</p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="glass rounded-xl p-5 transition hover:-translate-y-1 hover:border-violet-300/40">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-lg bg-violet-500/12 text-violet-300">
                  <Icon size={24} />
                </div>
                <p className="text-lg font-bold text-white">{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
