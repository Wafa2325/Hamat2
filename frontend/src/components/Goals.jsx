import { TrendingUp, Handshake, Cog } from 'lucide-react';
import { Reveal, SectionHead } from './Reveal';
import { useLang } from '../i18n';

const ICONS = [TrendingUp, Handshake, Cog];

export const Goals = () => {
  const { t } = useLang();
  return (
    <section id="goals" data-testid="goals-section" className="relative bg-[#120818] py-24 lg:py-32 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(192,132,252,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(192,132,252,0.04)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <SectionHead dark align="start" eyebrow={t.goals.eyebrow} title={t.goals.title} intro={t.goals.intro} />
            <div className="flex flex-col gap-5 -mt-4">
              {t.goals.items.map((g, i) => {
                const Icon = ICONS[i];
                return (
                  <Reveal key={g.title} delay={i * 0.1}>
                    <div
                      data-testid={`goal-card-${i}`}
                      className="group flex items-start gap-5 rounded-3xl border border-fuchsia-300/15 bg-[#231238]/60 p-6 backdrop-blur transition-all duration-500 hover:border-fuchsia-300/40 hover:bg-[#2b1742]/80"
                    >
                      <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#C5A16F]/25 to-fuchsia-500/25 text-[#C5A16F] transition-transform duration-500 group-hover:scale-110">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold text-purple-50">{g.title}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-purple-200/65">{g.text}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
          <Reveal delay={0.2} className="lg:col-span-2">
            <div className="relative">
              <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-tr from-fuchsia-500/20 to-[#C5A16F]/20 blur-2xl" />
              <img
                src="/assets/goals-leadership.jpg"
                alt="Leadership and expansion"
                className="relative rounded-[2rem] border border-fuchsia-300/20 shadow-[0_30px_70px_rgba(10,4,18,0.6)]"
                data-testid="goals-image"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
