import {
  Code2,
  Database,
  FileCode2,
  Globe2,
  Layers3,
  LockKeyhole,
  Mail,
  MessageCircle,
  ServerCog,
  ShieldCheck,
  TerminalSquare,
  TestTube2,
  Workflow,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import type { IconType } from 'react-icons';

export const profile = {
  name: 'Gabriel Felix',
  role: 'Desenvolvedor Java Pleno',
  shortRole: 'Dev Java Pleno',
  email: 'gabibielmft@gmail.com',
  whatsapp: '87996486942',
  github: 'https://github.com/Bielfla27',
  linkedin: 'https://www.linkedin.com/in/gabriel-felix-477015219',
  image: '/gabriel-profile.png',
  description:
    'Desenvolvedor full stack com foco em Java, Spring Boot, React, PL/SQL Oracle e construção de aplicações modernas, escaláveis e seguras.',
  about:
    'Sou Desenvolvedor Java Pleno, atuando com desenvolvimento full stack, sistemas corporativos e financeiros, APIs REST, integrações, PL/SQL Oracle, Java, Spring Boot e React.',
};

export const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contato', href: '#contato' },
];

export const highlights = [
  { label: '1+ ano como Desenvolvedor Pleno', icon: ServerCog },
  { label: 'Java & Spring Boot', icon: Code2 },
  { label: 'React', icon: Layers3 },
  { label: 'PL/SQL Oracle', icon: Database },
];

export type Skill = {
  name: string;
  icon: LucideIcon;
  tone: string;
};

export const skills: Skill[] = [
  { name: 'Java', icon: FileCode2, tone: 'text-red-400' },
  { name: 'Spring Boot', icon: ServerCog, tone: 'text-emerald-400' },
  { name: 'Spring Data JPA', icon: Workflow, tone: 'text-lime-400' },
  { name: 'Hibernate', icon: Layers3, tone: 'text-amber-300' },
  { name: 'REST API', icon: Globe2, tone: 'text-violet-300' },
  { name: 'React', icon: Code2, tone: 'text-cyan-300' },
  { name: 'TypeScript', icon: TerminalSquare, tone: 'text-blue-300' },
  { name: 'JavaScript', icon: FileCode2, tone: 'text-yellow-300' },
  { name: 'PostgreSQL', icon: Database, tone: 'text-sky-300' },
  { name: 'Oracle', icon: Database, tone: 'text-red-300' },
  { name: 'PL/SQL', icon: Database, tone: 'text-orange-300' },
  { name: 'Docker', icon: ServerCog, tone: 'text-blue-400' },
  { name: 'Git', icon: Workflow, tone: 'text-rose-400' },
  { name: 'Maven', icon: Workflow, tone: 'text-pink-400' },
  { name: 'JUnit', icon: TestTube2, tone: 'text-green-300' },
  { name: 'JWT', icon: LockKeyhole, tone: 'text-purple-300' },
];

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  icon: LucideIcon;
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    title: 'Papitômetro Copa do Mundo 2026',
    description:
      'Sistema de bolão para Copa do Mundo com salas, palpites, ranking, autenticação e integração com API de jogos.',
    technologies: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'JWT', 'Vercel', 'Render'],
    icon: ShieldCheck,
    liveUrl: 'https://papitometro-copa.vercel.app/',
    githubUrl: 'https://github.com/Bielfla27/papitometro-copa',
  },
  {
    title: 'Pedro Alexandre Advocacia Criminal',
    description:
      'Site institucional para advogado criminalista, com apresentação profissional, áreas de atuação e canais de contato.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    icon: Globe2,
    liveUrl: 'https://pedroalexandrecriminal.com/',
    githubUrl: 'https://github.com/Bielfla27/pedro_alexandre_adv_page',
  },
  {
    title: 'Plataforma de Cursos de Artesanato',
    description:
      'Plataforma para venda e organização de cursos online de pintura em pano de prato, com foco em aulas passo a passo para iniciantes.',
    technologies: ['Java', 'Spring Boot', 'React', 'PostgreSQL'],
    icon: Layers3,
  },
  {
    title: 'Sistema Financeiro Interno',
    description:
      'Sistema voltado para rotinas financeiras, consultas, relatórios e regras de negócio utilizando Java e PL/SQL Oracle.',
    technologies: ['Java', 'Oracle', 'PL/SQL', 'SQL'],
    icon: Database,
  },
];

export type Experience = {
  role: string;
  company: string;
  contract?: string;
  period: string;
  duration: string;
  location: string;
  descriptions: string[];
  skills: string[];
};

export const experiences: Experience[] = [
  {
    role: 'Desenvolvedor Pleno',
    company: 'MV',
    contract: 'Tempo integral',
    period: 'jun de 2025 - o momento',
    duration: '1 ano 1 mês',
    location: 'Garanhuns, Pernambuco, Brasil',
    descriptions: [
      'Atuação no desenvolvimento, manutenção e evolução de sistemas corporativos, participando ativamente da análise de requisitos, definição de soluções técnicas e implementação de novas funcionalidades.',
      'Responsável pelo desenvolvimento de aplicações utilizando Java, Spring Boot, React e Oracle Database, atuando tanto no backend quanto no frontend em uma abordagem Full Stack.',
      'Experiência na construção e manutenção de APIs REST, integrações entre sistemas, otimização de consultas SQL e desenvolvimento de procedures, functions e packages utilizando PL/SQL Oracle.',
      'Participação na análise e resolução de problemas em ambientes produtivos, identificação de oportunidades de melhoria e implementação de soluções visando desempenho, escalabilidade e qualidade de software.',
      'Atuação próxima às áreas de negócio, especialmente em demandas da área financeira, contribuindo para a definição de requisitos, validação de regras de negócio e entrega de soluções alinhadas aos objetivos da organização.',
      'Colaboração com equipes multidisciplinares utilizando metodologias ágeis, apoiando desenvolvedores menos experientes e contribuindo para a disseminação de boas práticas de desenvolvimento.',
    ],
    skills: ['Java', 'Spring Boot', 'React', 'Oracle Database', 'PL/SQL', 'SQL'],
  },
  {
    role: 'Desenvolvedor Júnior',
    company: 'MV',
    contract: 'Tempo integral',
    period: 'jan de 2022 - jun de 2025',
    duration: '3 anos 6 meses',
    location: 'Brasil',
    descriptions: [
      'Atuação no desenvolvimento e manutenção de sistemas corporativos, participando da implementação de novas funcionalidades, correção de bugs e suporte a aplicações críticas do negócio.',
      'Desenvolvimento de soluções utilizando Java e Oracle Database, com foco na criação e manutenção de consultas SQL, procedures, functions e rotinas PL/SQL.',
      'Participação em projetos de integração entre sistemas, análise de requisitos, testes e melhorias contínuas de performance e qualidade de código.',
      'Colaboração com equipes multidisciplinares utilizando metodologias ágeis para entrega de soluções voltadas ao setor financeiro e de gestão empresarial.',
    ],
    skills: ['Java', 'Oracle Database', 'PL/SQL', 'SQL', 'Integrações'],
  },
  {
    role: 'Monitor de Programação Orientada a Objeto',
    company: 'Universidade Federal do Agreste de Pernambuco',
    contract: 'Temporário',
    period: 'out de 2021 - jan de 2022',
    duration: '4 meses',
    location: 'Garanhuns, Pernambuco, Brasil',
    descriptions: [
      'Apoio a estudantes em conceitos de programação orientada a objetos, resolução de dúvidas, acompanhamento de atividades práticas e reforço de fundamentos de lógica, classes, objetos, herança e encapsulamento.',
    ],
    skills: ['Java', 'POO', 'Lógica de programação', 'Mentoria'],
  },
];

export const socialLinks = [
  { label: 'GitHub', href: profile.github, icon: FaGithub },
  { label: 'LinkedIn', href: profile.linkedin, icon: FaLinkedinIn },
  { label: 'E-mail', href: `mailto:${profile.email}`, icon: Mail },
  { label: 'WhatsApp', href: `https://wa.me/55${profile.whatsapp}`, icon: MessageCircle },
] satisfies Array<{ label: string; href: string; icon: LucideIcon | IconType }>;



