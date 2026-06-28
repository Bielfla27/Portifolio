import { ArrowRight, Braces, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { profile } from '../data/portfolio';

const javaSnippet = [
  'public class Developer {',
  '  private String nome = "Gabriel Felix";',
  '  private String cargo = "Dev Java Pleno";',
  '  private String stack = "Java, Spring Boot, React";',
  '',
  '  public String foco() {',
  '    return "Soluções escaláveis e seguras";',
  '  }',
  '}',
];

export function Hero() {
  return (
    <section id="inicio" className="container-shell scroll-mt-24 pt-28 sm:pt-32 lg:pt-30">
      <div className="grid min-w-0 items-center gap-12 pb-12 lg:grid-cols-[1fr_0.95fr]">
        <motion.div
          className="min-w-0"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <span className="section-kicker">Olá, eu sou</span>
          <h1 className="max-w-3xl text-[clamp(3rem,14vw,4.5rem)] font-extrabold leading-tight tracking-normal text-white sm:text-6xl lg:text-7xl">
            Gabriel Felix
          </h1>
          <h2 className="mt-3 max-w-full text-[clamp(1.65rem,8vw,2.5rem)] font-bold leading-tight tracking-normal sm:text-4xl">
            <span className="gradient-text inline-block max-w-full break-words">{profile.role}</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            {profile.description}
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projetos"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-violet-600 px-6 font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-violet-500"
            >
              Ver projetos <ArrowRight size={18} />
            </a>
            <a
              href="#contato"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-6 font-semibold text-white transition hover:-translate-y-0.5 hover:border-violet-300/50"
            >
              Entre em contato
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-5 text-sm text-slate-300">
            <a className="inline-flex items-center gap-2 hover:text-violet-300" href={profile.github}>
              <FaGithub size={18} /> GitHub
            </a>
            <a className="inline-flex items-center gap-2 hover:text-violet-300" href={profile.linkedin}>
              <FaLinkedinIn size={18} /> LinkedIn
            </a>
            <a className="inline-flex items-center gap-2 hover:text-violet-300" href={`mailto:${profile.email}`}>
              <Mail size={18} /> E-mail
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative min-w-0"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.12 }}
        >
          <div className="absolute -inset-8 rounded-full bg-violet-500/10 blur-3xl" />
          <div className="glass relative overflow-hidden rounded-2xl">
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-300" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
              <span className="ml-auto text-slate-500">
                <Braces size={19} />
              </span>
            </div>
            <pre className="max-w-full whitespace-pre-wrap break-words p-5 text-[0.72rem] leading-6 text-slate-300 sm:p-7 sm:text-sm sm:leading-7">
              <code>
                {javaSnippet.map((line, index) => (
                  <span key={`${line}-${index}`} className={line.includes('String') ? 'text-cyan-200' : ''}>
                    {line}
                    {'\n'}
                  </span>
                ))}
              </code>
            </pre>
            <div className="break-all border-t border-white/10 bg-white/[0.03] px-5 py-4 font-mono text-[0.68rem] leading-5 text-slate-400 sm:text-xs">
              System.out.println("Vamos construir algo incrível!");
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
