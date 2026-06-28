import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, children, className = '' }: SectionProps) {
  return (
    <motion.section
      id={id}
      className={`container-shell scroll-mt-24 py-10 sm:py-12 lg:py-10 ${className}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  );
}
