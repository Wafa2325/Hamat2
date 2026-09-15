import { Reveal, SectionHead } from './Reveal';
import { useLang } from '../i18n';

const LOGOS = [
  { id: 'dakar', name: 'DAKAR' }, { id: 'dct', name: 'DCT CPS' }, { id: 'sgs', name: 'SGS' }, { id: 'jeddah-superdome', name: 'Jeddah Superdome' },
  { id: 'mazda', name: 'Mazda' }, { id: 'f1-stc', name: 'Formula 1 STC Saudi Arabian Grand Prix' }, { id: 'aone', name: 'Aone' },
  { id: 'shadow', name: 'Shadow for Events' }, { id: '360live', name: '360 LIVE!' }, { id: 'fiba3x3', name: 'FIBA 3x3 World Tour Riyadh Masters' },
  { id: 'tamam', name: 'TAMAM', gold: true }, { id: 'altamayoz-academy', name: 'أكاديمية التميز', gold: true }, { id: 'pink', name: 'Pink Cup', gold: true },
  { id: 'pioneer-ideas', name: 'أفكار رائدة – Pioneer Ideas', gold: true }, { id: 'archidot', name: 'Archidot Studio', gold: true }, { id: 'hattrick', name: 'Hattrick', gold: true },
];

const Logo = ({ logo, testId }) => (
  <div
    data-testid={testId}
    title={logo.name}
    className={`group relative flex h-28 w-28 sm:h-32 sm:w-32 shrink-0 items-center justify-center rounded-full p-[5px] shadow-[0_12px_32px_rgba(126,34,206,0.14)] transition-transform duration-500 hover:-translate-y-2 hover:scale-105 ${logo.gold ? 'bg-gradient-to-br from-[#E4C27E] via-[#C5A16F] to-[#A88650]' : 'bg-gradient-to-br from-[#4a2a55] via-[#2A1535] to-[#5d3a6a]'}`}
  >
    <img src={`/assets/clients/${logo.id}.png`} alt={logo.name} loading="lazy" className="h-full w-full rounded-full object-cover" />
    <span className="pointer-events-none absolute -bottom-8 whitespace-nowrap rounded-full bg-[#2A1535] px-3 py-1 text-[11px] font-semibold text-purple-50 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-bottom-9">
      {logo.name}
    </span>
  </div>
);

export const Clients = () => {
  const { t } = useLang();
  const doubled = [...LOGOS, ...LOGOS];
  return (
    <section id="clients" data-testid="clients-section" className="relative bg-[#FAF7FC] py-24 lg:py-32 scroll-mt-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 brand-pattern opacity-[0.07]" />
      <div className="pointer-events-none absolute -top-20 start-1/3 h-80 w-80 rounded-full bg-[#C5A16F]/15 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead eyebrow={t.clients.eyebrow} title={t.clients.title} intro={t.clients.intro} />
      </div>
      <Reveal>
        <div data-testid="clients-marquee-wall" className="relative py-10 [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
          <div className="animate-marquee flex w-max items-center gap-8 px-4 hover:[animation-play-state:paused]">
            {doubled.map((logo, i) => (
              <Logo key={`${logo.id}-${i}`} logo={logo} testId={i < LOGOS.length ? `client-logo-${logo.id}` : undefined} />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
};
