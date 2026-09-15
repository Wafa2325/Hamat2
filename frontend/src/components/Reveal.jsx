import { motion } from 'framer-motion';

export const Reveal = ({ children, delay = 0, className = '', y = 28 }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export const SectionHead = ({ eyebrow, title, intro, dark = false, align = 'center' }) => (
  <Reveal className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''} mb-14`}>
    <span
      data-testid={`eyebrow-${eyebrow?.slice(0, 12).replace(/\s/g, '-')}`}
      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-purple-500 dark:text-fuchsia-300"
    >
      <span className="h-px w-8 bg-gradient-to-r from-transparent via-fuchsia-400 to-transparent" />
      {eyebrow}
      <span className="h-px w-8 bg-gradient-to-r from-transparent via-fuchsia-400 to-transparent" />
    </span>
    <h2 className={`mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight ${dark ? 'text-purple-50' : 'text-[#2A1535]'}`}>
      {title}
    </h2>
    {intro && (
      <p className={`mt-4 text-base sm:text-lg leading-relaxed ${dark ? 'text-purple-200/70' : 'text-[#6b5875]'}`}>
        {intro}
      </p>
    )}
  </Reveal>
);
