import { Reveal, SectionHead } from './Reveal';
import { useLang } from '../i18n';

const IMAGES = ['/assets/project-sgs.jpg', '/assets/project-lepure.jpg', '/assets/project-mazda.jpg', '/assets/project-pinkcup.jpg'];

export const Portfolio = () => {
  const { t } = useLang();
  return (
    <section id="work" data-testid="portfolio-section" className="relative bg-[#16091f] py-24 lg:py-32 scroll-mt-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
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
                <div className="relative h-60 sm:h-72 overflow-hidden">
                  <img
                    src={IMAGES[i]}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#16091f] via-[#16091f]/25 to-transparent" />
                  <span className="absolute top-4 start-4 rounded-full border border-[#C5A16F]/40 bg-[#16091f]/70 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#C5A16F] backdrop-blur">
                    {p.category}
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-semibold text-purple-50">{p.title}</h3>
                  <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-purple-200/65">{p.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
