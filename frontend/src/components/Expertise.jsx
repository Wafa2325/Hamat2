import { Ticket, Users, Megaphone, PenTool, Truck, AlertTriangle, Building2, GraduationCap, Trophy, Medal } from 'lucide-react';
import { Reveal, SectionHead } from './Reveal';
import { useLang } from '../i18n';

const ICONS = [Ticket, Users, Megaphone, PenTool, Truck, AlertTriangle, Building2, GraduationCap, Trophy, Medal];

export const Expertise = () => {
  const { t } = useLang();
  return (
    <section id="expertise" data-testid="expertise-section" className="relative bg-[#FAF7FC] py-24 lg:py-32 scroll-mt-20 overflow-hidden">
      <div className="pointer-events-none absolute top-0 end-[-6%] h-96 w-96 rounded-full bg-fuchsia-200/40 blur-[130px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead eyebrow={t.expertise.eyebrow} title={t.expertise.title} intro={t.expertise.intro} />
        <div data-testid="team-expertise-grid" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {t.expertise.items.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={item} delay={(i % 5) * 0.06}>
                <div
                  data-testid={`expertise-item-${i}`}
                  className="group flex h-full items-center gap-3.5 rounded-2xl border border-purple-100 bg-white px-5 py-4 shadow-[0_6px_24px_rgba(126,34,206,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-fuchsia-300 hover:shadow-[0_16px_40px_rgba(126,34,206,0.16)]"
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#8A688A]/12 to-fuchsia-100 text-[#8A688A] transition-colors duration-300 group-hover:from-[#8A688A] group-hover:to-fuchsia-500 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-semibold leading-snug text-[#3c2a47]">{item}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
