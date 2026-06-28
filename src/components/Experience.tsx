import { BriefcaseBusiness, MapPin } from 'lucide-react';
import { experiences } from '../data/portfolio';
import { Section } from './Section';

export function Experience() {
  return (
    <Section id="experiencia">
      <div className="mb-8">
        <span className="section-kicker">
          <BriefcaseBusiness size={18} /> Trajetória
        </span>
        <h2 className="section-title">Experiência</h2>
      </div>

      <div className="glass rounded-2xl p-6 sm:p-8">
        <div className="relative space-y-10 border-l border-violet-400/30 pl-6 sm:pl-8">
          {experiences.map((experience) => (
            <article key={`${experience.company}-${experience.role}`} className="relative">
              <span className="absolute -left-[2.1rem] top-1 grid h-5 w-5 place-items-center rounded-full border border-violet-300/60 bg-night sm:-left-[2.6rem]">
                <span className="h-2.5 w-2.5 rounded-full bg-violet-400" />
              </span>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-violet-300">{experience.role}</h3>
                  <p className="mt-1 font-semibold text-white">
                    {experience.company}
                    {experience.contract ? (
                      <span className="font-normal text-slate-400"> · {experience.contract}</span>
                    ) : null}
                  </p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300 sm:text-right">
                  <p className="font-medium text-violet-200">{experience.period}</p>
                  <p>{experience.duration}</p>
                </div>
              </div>

              <p className="mt-3 flex items-center gap-2 text-sm text-slate-400">
                <MapPin size={16} className="shrink-0 text-violet-300" /> {experience.location}
              </p>

              <div className="mt-4 space-y-3">
                {experience.descriptions.map((description) => (
                  <p key={description} className="max-w-5xl text-sm leading-7 text-slate-300 sm:text-base">
                    {description}
                  </p>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {experience.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-violet-300/20 bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
