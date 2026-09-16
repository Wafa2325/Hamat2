import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Images, Maximize2, X } from 'lucide-react';
import { Reveal, SectionHead } from './Reveal';
import { useLang } from '../i18n';

const B = '/assets/portfolio';
const PROJECTS = [
  { cover: `${B}/aroya-cover.jpg`, images: [`${B}/aroya-1.jpg`] },
  { cover: `${B}/pink-cover.jpg`, images: [`${B}/pink-1.jpg`, `${B}/pink-2.jpg`, `${B}/pink-3.jpg`, `${B}/pink-4.jpg`] },
  { cover: `${B}/w2k23-cover.jpg`, images: [`${B}/w2k23-1.jpg`, `${B}/w2k23-2.jpg`] },
  { cover: `${B}/jahez-cover.jpg`, images: [`${B}/jahez-1.jpg`, `${B}/jahez-2.jpg`] },
  { cover: `${B}/ittihad-cover.jpg`, images: [`${B}/ittihad-1.jpg`, `${B}/ittihad-2.jpg`, `${B}/ittihad-3.jpg`, `${B}/ittihad-4.jpg`] },
  { cover: `${B}/alahli-cover.jpg`, images: [`${B}/alahli-1.jpg`] },
  { cover: `${B}/sgs-cover.jpg`, images: [`${B}/sgs-1.jpg`] },
  { cover: `${B}/lepure-cover.jpg`, images: [`${B}/lepure-1.jpg`] },
  { cover: `${B}/mazda-cover.jpg`, images: [`${B}/mazda-1.jpg`] },
];

const Lightbox = ({ project, images, onClose, t }) => {
  const [idx, setIdx] = useState(0);
  const total = images.length;
  const go = useCallback((d) => setIdx((i) => (i + d + total) % total), [total]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [onClose, go]);

  return (
    <motion.div
      data-testid="portfolio-lightbox"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0d0512]/92 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <button
        data-testid="portfolio-lightbox-close-button"
        aria-label={t.work.close}
        onClick={onClose}
        className="absolute top-5 end-5 z-[3] flex h-11 w-11 items-center justify-center rounded-full border border-fuchsia-300/30 bg-white/10 text-purple-50 transition-colors hover:bg-fuchsia-500"
      >
        <X className="h-5 w-5" />
      </button>

      {total > 1 && (
        <>
          <button
            data-testid="portfolio-lightbox-prev-button"
            aria-label={t.work.prev}
            onClick={(e) => { e.stopPropagation(); go(-1); }}
            className="absolute start-3 sm:start-6 z-[3] flex h-12 w-12 items-center justify-center rounded-full border border-fuchsia-300/30 bg-white/10 text-purple-50 transition-colors hover:bg-fuchsia-500"
          >
            <ChevronLeft className="h-6 w-6 rtl:-scale-x-100" />
          </button>
          <button
            data-testid="portfolio-lightbox-next-button"
            aria-label={t.work.next}
            onClick={(e) => { e.stopPropagation(); go(1); }}
            className="absolute end-3 sm:end-6 z-[3] flex h-12 w-12 items-center justify-center rounded-full border border-fuchsia-300/30 bg-white/10 text-purple-50 transition-colors hover:bg-fuchsia-500"
          >
            <ChevronRight className="h-6 w-6 rtl:-scale-x-100" />
          </button>
        </>
      )}

      <motion.figure
        key={idx}
        initial={{ scale: 0.94, opacity: 0.4 }} animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 26 }}
        className="flex max-h-full flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          data-testid="portfolio-lightbox-image"
          src={images[idx]}
          alt={project.title}
          className="max-h-[74vh] max-w-[90vw] rounded-2xl border border-fuchsia-300/20 object-contain shadow-[0_40px_90px_rgba(0,0,0,0.6)]"
        />
        <figcaption className="mt-4 text-center">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#C5A16F]">{project.category}</span>
          <h3 className="mt-1 text-lg font-semibold text-purple-50">{project.title}</h3>
          {total > 1 && (
            <div className="mt-3 flex items-center justify-center gap-2" data-testid="portfolio-lightbox-dots">
              {images.map((_, i) => (
                <button
                  key={i}
                  aria-label={`${i + 1}`}
                  onClick={() => setIdx(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === idx ? 'w-6 bg-fuchsia-400' : 'w-2 bg-purple-200/30 hover:bg-purple-200/60'}`}
                />
              ))}
            </div>
          )}
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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.work.projects.map((p, i) => {
            const project = PROJECTS[i];
            const multi = project.images.length > 1;
            return (
              <Reveal key={p.title} delay={(i % 3) * 0.1}>
                <article
                  data-testid={`portfolio-card-${i}`}
                  className="group relative h-full overflow-hidden rounded-3xl border border-fuchsia-300/15 bg-[#231238]/60 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-fuchsia-300/40 hover:shadow-[0_30px_70px_rgba(168,85,247,0.22)]"
                >
                  <button
                    type="button"
                    data-testid={`portfolio-card-${i}-open-button`}
                    aria-label={`${multi ? t.work.viewGallery : t.work.view}: ${p.title}`}
                    onClick={() => setActive(i)}
                    className="relative block aspect-[4/3] w-full cursor-zoom-in overflow-hidden bg-[#1d0f2c] text-start focus-visible:outline-none"
                  >
                    <img
                      src={project.cover}
                      alt={p.title}
                      loading="lazy"
                      data-testid={`portfolio-card-${i}-image`}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#16091f] via-transparent to-transparent" />
                    <span className="absolute top-4 start-4 z-[3] rounded-full border border-[#C5A16F]/40 bg-[#16091f]/70 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#C5A16F] backdrop-blur">
                      {p.category}
                    </span>
                    {multi && (
                      <span
                        data-testid={`portfolio-card-${i}-count`}
                        className="absolute top-4 end-4 z-[3] inline-flex items-center gap-1.5 rounded-full border border-fuchsia-300/30 bg-[#16091f]/70 px-3 py-1.5 text-[11px] font-bold text-purple-50 backdrop-blur"
                      >
                        <Images className="h-3.5 w-3.5 text-fuchsia-300" />
                        {project.images.length} {t.work.photos}
                      </span>
                    )}
                    <span className="absolute bottom-4 end-4 z-[3] inline-flex items-center gap-2 rounded-full border border-fuchsia-300/30 bg-[#16091f]/80 px-3.5 py-2 text-xs font-semibold text-purple-50 opacity-0 backdrop-blur transition-all duration-500 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100">
                      <Maximize2 className="h-3.5 w-3.5 text-[#C5A16F]" />
                      {multi ? t.work.viewGallery : t.work.view}
                    </span>
                  </button>
                  <div className="p-7">
                    <h3 className="text-xl font-semibold text-purple-50">{p.title}</h3>
                    <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-purple-200/65">{p.text}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
      <AnimatePresence>
        {active !== null && (
          <Lightbox
            project={t.work.projects[active]}
            images={PROJECTS[active].images}
            onClose={() => setActive(null)}
            t={t}
          />
        )}
      </AnimatePresence>
    </section>
  );
};
