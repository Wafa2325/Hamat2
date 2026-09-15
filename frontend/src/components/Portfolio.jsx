import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Maximize2, X } from 'lucide-react';
import { Reveal, SectionHead } from './Reveal';
import { useLang } from '../i18n';

const IMAGES = ['/assets/project-sgs.jpg', '/assets/project-lepure.jpg', '/assets/project-mazda.jpg', '/assets/project-pinkcup.jpg'];

const Lightbox = ({ project, index, onClose, t }) => {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [onClose]);

  return (
    <motion.div
      data-testid="portfolio-lightbox"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0d0512]/90 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <button
        data-testid="portfolio-lightbox-close-button"
        aria-label={t.work.close}
        onClick={onClose}
        className="absolute top-5 end-5 flex h-11 w-11 items-center justify-center rounded-full border border-fuchsia-300/30 bg-white/10 text-purple-50 transition-colors hover:bg-fuchsia-500"
      >
        <X className="h-5 w-5" />
      </button>
      <motion.figure
        initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 10 }}
        transition={{ type: 'spring', stiffness: 260, damping: 26 }}
        className="flex max-h-full flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          data-testid="portfolio-lightbox-image"
          src={IMAGES[index]}
          alt={project.title}
          className="max-h-[78vh] max-w-[92vw] rounded-2xl border border-fuchsia-300/20 object-contain shadow-[0_40px_90px_rgba(0,0,0,0.6)]"
        />
        <figcaption className="mt-4 text-center">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#C5A16F]">{project.category}</span>
          <h3 className="mt-1 text-lg font-semibold text-purple-50">{project.title}</h3>
        </figcaption>
      </motion.figure>
    </motion.div>
  );
};

export const Portfolio = () => {
  const { t } = useLang();
  const [active, setActive] = useState(null);

  return (
    <section id="work" data-testid="portfolio-section" className="relative bg-[#16091f] py-24 lg:py-32 scroll-mt-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 brand-pattern-light opacity-[0.05]" />
        <div className="absolute -top-20 end-1/4 h-96 w-96 rounded-full bg-fuchsia-600/15 blur-[140px]" />
        <div className="absolute bottom-0 start-0 h-80 w-80 rounded-full bg-[#8A688A]/20 blur-[130px]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead dark eyebrow={t.work.eyebrow} title={t.work.title} intro={t.work.intro} />
        <div className="grid gap-6 md:grid-cols-2">
          {t.work.projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.12}>
              <article
                data-testid={`portfolio-card-${i}`}
                className="group relative h-full overflow-hidden rounded-3xl border border-fuchsia-300/15 bg-[#231238]/60 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-fuchsia-300/40 hover:shadow-[0_30px_70px_rgba(168,85,247,0.22)]"
              >
                <button
                  type="button"
                  data-testid={`portfolio-card-${i}-open-button`}
                  aria-label={`${t.work.view}: ${p.title}`}
                  onClick={() => setActive(i)}
                  className="relative block h-[24rem] sm:h-[27rem] w-full cursor-zoom-in overflow-hidden bg-[#1d0f2c] text-start focus-visible:outline-none"
                >
                  <img
                    src={IMAGES[i]}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full scale-125 object-cover opacity-60 blur-2xl saturate-150"
                  />
                  <div className="absolute inset-0 bg-[#16091f]/30" />
                  <img
                    src={IMAGES[i]}
                    alt={p.title}
                    data-testid={`portfolio-card-${i}-image`}
                    className="relative z-[1] h-full w-full object-contain p-3 drop-shadow-[0_24px_48px_rgba(0,0,0,0.55)] transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-x-0 bottom-0 z-[2] h-28 bg-gradient-to-t from-[#16091f] to-transparent" />
                  <span className="absolute top-4 start-4 z-[3] rounded-full border border-[#C5A16F]/40 bg-[#16091f]/70 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#C5A16F] backdrop-blur">
                    {p.category}
                  </span>
                  <span className="absolute bottom-4 end-4 z-[3] inline-flex items-center gap-2 rounded-full border border-fuchsia-300/30 bg-[#16091f]/80 px-3.5 py-2 text-xs font-semibold text-purple-50 opacity-0 backdrop-blur transition-all duration-500 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100">
                    <Maximize2 className="h-3.5 w-3.5 text-[#C5A16F]" />
                    {t.work.view}
                  </span>
                </button>
                <div className="p-7">
                  <h3 className="text-xl font-semibold text-purple-50">{p.title}</h3>
                  <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-purple-200/65">{p.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {active !== null && (
          <Lightbox project={t.work.projects[active]} index={active} onClose={() => setActive(null)} t={t} />
        )}
      </AnimatePresence>
    </section>
  );
};
