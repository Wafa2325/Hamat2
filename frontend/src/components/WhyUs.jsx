import { Users, Clock, Layers, Globe } from 'lucide-react';
import { Reveal, SectionHead } from './Reveal';
import { useLang } from '../i18n';

const ICONS = [Users, Clock, Layers, Globe];

export const WhyUs = () => {
  const { t } = useLang();
  return (
    <section id="why-us" data-testid="why-us-section" className="relative bg-[#120818] py-24 lg:py-32 scroll-mt-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 start-[-8%] h-96 w-96 rounded-full bg-fuchsia-600/15 blur-[140px]" />
        <div className="absolute bottom-0 end-[-6%] h-80 w-80 rounded-full bg-[#C5A16F]/10 blur-[130px]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead dark eyebrow={t.whyus.eyebrow} title={t.whyus.title} intro={t.whyus.intro} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.whyus.items.map((w, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={w.title} delay={i * 0.08}>
                <div
                  data-testid={`why-us-card-${i}`}
                  className="group relative h-full overflow-hidden rounded-3xl border border-fuchsia-300/15 bg-[#231238]/60 p-7 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-[#C5A16F]/50 hover:shadow-[0_24px_60px_rgba(197,161,111,0.15)]"
                >
                  <span className="absolute end-5 top-5 text-5xl font-extrabold text-white/5 transition-colors duration-500 group-hover:text-fuchsia-300/10">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#C5A16F] to-[#8A688A] text-white shadow-[0_8px_24px_rgba(197,161,111,0.35)] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-purple-50">{w.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-purple-200/65">{w.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
