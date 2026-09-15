import { Reveal, SectionHead } from './Reveal';
import { useLang } from '../i18n';

export const Clients = () => {
  const { t } = useLang();
  const doubled = [...t.clients.list, ...t.clients.list];
  return (
    <section id="clients" data-testid="clients-section" className="relative bg-[#FAF7FC] py-24 lg:py-32 scroll-mt-20 overflow-hidden">
      <div className="pointer-events-none absolute -top-20 start-1/3 h-80 w-80 rounded-full bg-[#C5A16F]/15 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead eyebrow={t.clients.eyebrow} title={t.clients.title} intro={t.clients.intro} />
      </div>
      <Reveal>
        <div
          data-testid="clients-marquee-wall"
          className="relative [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]"
        >
          <div className="animate-marquee flex w-max items-center gap-5 px-4">
            {doubled.map((name, i) => (
              <span
                key={`${name}-${i}`}
                data-testid={i < t.clients.list.length ? `client-badge-${i}` : undefined}
                className="flex h-20 shrink-0 items-center justify-center rounded-2xl border border-purple-100 bg-white px-8 text-center text-sm sm:text-base font-bold tracking-wide text-[#8A688A] shadow-[0_8px_28px_rgba(126,34,206,0.07)] transition-colors duration-300 hover:border-fuchsia-300 hover:text-fuchsia-600"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
};
