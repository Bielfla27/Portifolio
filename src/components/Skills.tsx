import { skills } from '../data/portfolio';
import { Section } from './Section';

export function Skills() {
  return (
    <Section id="skills">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <span className="section-kicker">Stack principal</span>
          <h2 className="section-title">Skills e Tecnologias</h2>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <div key={skill.name} className="glass flex min-h-16 items-center gap-3 rounded-lg px-4 py-3 transition hover:-translate-y-0.5 hover:border-violet-300/40">
              <Icon className={skill.tone} size={22} />
              <span className="font-medium text-slate-100">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
