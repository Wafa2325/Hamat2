import { Eye, Rocket } from 'lucide-react';
import { Reveal, SectionHead } from './Reveal';
import { useLang } from '../i18n';

export const About = () => {
  const { t } = useLang();
  return (
    <section id="about" data-testid="about-section" className="relative bg-[#FAF7FC] py-24 lg:py-32 scroll-mt-20 overflow-hidden">
      <div className="pointer-events-none absolute -top-24 end-[-8%] h-96 w-96 rounded-full bg-fuchsia-200/50 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-[#8A688A]/20 to-[#C5A16F]/25 blur-xl" />
              <img
                src="/assets/diorama-light.jpg"
                alt="Hamat Al-ebda'a event ecosystem illustration"
                className="relative rounded-[2rem] border border-purple-100 shadow-[0_24px_60px_rgba(90,40,120,0.15)]"
                data-testid="about-image"
              />
            </div>
          </Reveal>
          <div>
            <SectionHead align="start" eyebrow={t.about.eyebrow} title={t.about.title} />
            <Reveal delay={0.1}>
              <p className="text-base sm:text-lg leading-relaxed text-[#6b5875] -mt-6" data-testid="about-text">
                {t.about.text}
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <Reveal delay={0.05}>
            <div data-testid="vision-card" className="group relative h-full overflow-hidden rounded-3xl border border-purple-100 bg-white p-8 shadow-[0_10px_36px_rgba(126,34,206,0.08)] transition-transform duration-500 hover:-translate-y-1.5">
              <div className="absolute -end-10 -top-10 h-36 w-36 rounded-full bg-fuchsia-100 blur-2xl transition-transform duration-500 group-hover:scale-150" />
              <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#8A688A] to-fuchsia-500 text-white shadow-lg">
                <Eye className="h-5 w-5" />
              </span>
              <h3 className="relative mt-5 text-xl sm:text-2xl font-semibold text-[#2A1535]">{t.about.visionTitle}</h3>
              <p className="relative mt-3 text-base leading-relaxed text-[#6b5875]">{t.about.vision}</p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div data-testid="mission-card" className="group relative h-full overflow-hidden rounded-3xl border border-purple-100 bg-white p-8 shadow-[0_10px_36px_rgba(126,34,206,0.08)] transition-transform duration-500 hover:-translate-y-1.5">
              <div className="absolute -end-10 -top-10 h-36 w-36 rounded-full bg-[#C5A16F]/20 blur-2xl transition-transform duration-500 group-hover:scale-150" />
              <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#C5A16F] to-[#8A688A] text-white shadow-lg">
                <Rocket className="h-5 w-5" />
              </span>
              <h3 className="relative mt-5 text-xl sm:text-2xl font-semibold text-[#2A1535]">{t.about.missionTitle}</h3>
              <p className="relative mt-3 text-base leading-relaxed text-[#6b5875]">{t.about.mission}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
