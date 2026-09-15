import { Sparkles, ShieldCheck, Target, Zap, Users } from 'lucide-react';
import { Reveal, SectionHead } from './Reveal';
import { useLang } from '../i18n';

const ICONS = [Sparkles, ShieldCheck, Target, Zap, Users];

export const Values = () => {
  const { t } = useLang();
  return (
    <section id="values" data-testid="values-section" className="relative bg-[#16091f] py-24 lg:py-32 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 start-1/4 h-80 w-80 rounded-full bg-fuchsia-600/15 blur-[130px]" />
        <div className="absolute bottom-0 end-1/4 h-80 w-80 rounded-full bg-[#C5A16F]/10 blur-[130px]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead dark eyebrow={t.values.eyebrow} title={t.values.title} intro={t.values.intro} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {t.values.items.map((v, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={v.title} delay={i * 0.08}>
                <div
                  data-testid={`value-card-${i}`}
                  className="group h-full rounded-3xl border border-fuchsia-300/15 bg-[#231238]/60 p-6 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-fuchsia-300/40 hover:bg-[#2b1742]/80 hover:shadow-[0_20px_50px_rgba(168,85,247,0.25)]"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#8A688A] to-fuchsia-500 text-white shadow-[0_8px_24px_rgba(168,85,247,0.4)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-purple-50">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-purple-200/65">{v.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
