import { Mail, MessageCircle, Send } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { profile } from '../data/portfolio';
import { Section } from './Section';

const contacts = [
  { label: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: profile.whatsapp, href: `https://wa.me/55${profile.whatsapp}`, icon: MessageCircle },
  { label: 'GitHub', href: profile.github, icon: FaGithub },
  { label: 'LinkedIn', href: profile.linkedin, icon: FaLinkedinIn },
];

export function Contact() {
  return (
    <Section id="contato">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <span className="section-kicker">Contato</span>
          <h2 className="section-title">Vamos conversar?</h2>
          <p className="mt-4 leading-7 text-slate-300">
            Aberto a oportunidades, projetos e conversas sobre Java, React e sistemas bem construídos.
          </p>
          <div className="mt-8 space-y-4">
            {contacts.map((contact) => {
              const Icon = contact.icon;
              return (
                <a key={contact.label} href={contact.href} className="flex items-center gap-3 text-slate-300 transition hover:text-violet-300">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-violet-500/12 text-violet-300">
                    <Icon size={19} />
                  </span>
                  {contact.label}
                </a>
              );
            })}
          </div>
        </div>

        <form className="glass rounded-2xl p-5 sm:p-7">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-medium text-slate-300">Nome</span>
              <input className="h-12 w-full rounded-lg border border-white/10 bg-white/5 px-4 text-white outline-none transition placeholder:text-slate-500 focus:border-violet-300/60" placeholder="Seu nome" />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-medium text-slate-300">E-mail</span>
              <input className="h-12 w-full rounded-lg border border-white/10 bg-white/5 px-4 text-white outline-none transition placeholder:text-slate-500 focus:border-violet-300/60" placeholder="seu@email.com" type="email" />
            </label>
          </div>
          <label className="mt-4 block space-y-2">
            <span className="text-sm font-medium text-slate-300">Assunto</span>
            <input className="h-12 w-full rounded-lg border border-white/10 bg-white/5 px-4 text-white outline-none transition placeholder:text-slate-500 focus:border-violet-300/60" placeholder="Como posso ajudar?" />
          </label>
          <label className="mt-4 block space-y-2">
            <span className="text-sm font-medium text-slate-300">Mensagem</span>
            <textarea className="min-h-36 w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-violet-300/60" placeholder="Conte um pouco sobre o projeto ou oportunidade." />
          </label>
          <button type="button" className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-violet-600 px-6 font-semibold text-white shadow-glow transition hover:bg-violet-500 sm:w-auto">
            Enviar mensagem <Send size={18} />
          </button>
        </form>
      </div>
    </Section>
  );
}
