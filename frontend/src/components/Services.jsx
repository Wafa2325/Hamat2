import { ScanLine, Route, UtensilsCrossed, PenTool, CalendarRange, ArrowLeft, ArrowRight } from 'lucide-react';
import { Reveal, SectionHead } from './Reveal';
import { useLang } from '../i18n';

const ICONS = [ScanLine, Route, UtensilsCrossed, PenTool, CalendarRange];

export const Services = () => {
  const { t, lang } = useLang();
  const Arrow = lang === 'ar' ? ArrowLeft : ArrowRight;
  return (
    <section id="services" data-testid="services-section" className="relative bg-[#FAF7FC] py-24 lg:py-32 scroll-mt-20 overflow-hidden">
      <div className="pointer-events-none absolute -bottom-24 start-[-6%] h-96 w-96 rounded-full bg-[#C5A16F]/15 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead eyebrow={t.services.eyebrow} title={t.services.title} intro={t.services.intro} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((s, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={s.title} delay={i * 0.07} className={i === 3 ? 'lg:col-start-1' : ''}>
                <div
                  data-testid={`service-card-${i}`}
                  className="group relative h-full overflow-hidden rounded-3xl border border-purple-100 bg-white p-8 shadow-[0_10px_36px_rgba(126,34,206,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_26px_60px_rgba(126,34,206,0.18)]"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-l from-[#8A688A] via-fuchsia-400 to-[#C5A16F] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="flex items-start justify-between">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#8A688A]/12 to-fuchsia-100 text-[#8A688A] transition-all duration-500 group-hover:from-[#8A688A] group-hover:to-fuchsia-500 group-hover:text-white group-hover:shadow-[0_10px_28px_rgba(168,85,247,0.4)]">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="text-4xl font-extrabold text-purple-100 transition-colors duration-500 group-hover:text-fuchsia-200">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg sm:text-xl font-semibold text-[#2A1535]">{s.title}</h3>
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#6b5875]">{s.text}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-fuchsia-500 opacity-0 transition-all duration-500 group-hover:opacity-100">
                    {t.hero.ctaWork}
                    <Arrow className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
