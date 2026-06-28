import { ArrowUpRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { projects } from '../data/portfolio';
import { Section } from './Section';

export function Projects() {
  return (
    <Section id="projetos">
      <div className="mb-8">
        <span className="section-kicker">Portfolio</span>
        <h2 className="section-title">Projetos em destaque</h2>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {projects.map((project) => {
          const Icon = project.icon;
          return (
            <article key={project.title} className="glass flex h-full flex-col rounded-xl p-6 transition hover:-translate-y-1 hover:border-violet-300/40">
              <div className="mb-5 grid h-14 w-14 place-items-center rounded-xl bg-gradient-to-br from-violet-500/25 to-electric/15 text-violet-200">
                <Icon size={27} />
              </div>
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <p className="mt-3 flex-1 leading-7 text-slate-300">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-violet-300 transition hover:text-violet-200"
                  >
                    Ver projeto <ArrowUpRight size={16} />
                  </a>
                ) : null}
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-white"
                  >
                    GitHub <FaGithub size={16} />
                  </a>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}


