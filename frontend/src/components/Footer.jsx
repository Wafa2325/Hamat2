import { Mail, Phone, Instagram, Download } from 'lucide-react';
import { useLang, scrollToSection } from '../i18n';

const NAV_KEYS = ['home', 'about', 'services', 'expertise', 'work', 'clients', 'whyus', 'contact'];
const SECTION_IDS = { home: 'home', about: 'about', services: 'services', expertise: 'expertise', work: 'work', clients: 'clients', whyus: 'why-us', contact: 'contact' };

export const Footer = () => {
  const { t } = useLang();
  return (
    <footer data-testid="footer" className="relative bg-[#0d0512] pt-20 pb-10 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 brand-pattern-light opacity-[0.045] [mask-image:linear-gradient(180deg,black,transparent)]" />
        <div className="absolute -top-24 start-1/4 h-72 w-72 rounded-full bg-fuchsia-600/10 blur-[120px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-fuchsia-400/40 to-transparent" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <img src="/assets/logo-white.png" alt="Hamat Al-ebda'a" className="h-20 w-auto" data-testid="footer-logo" />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-purple-200/60">
              {t.footer.tagline}
            </p>
            <a
              data-testid="footer-download-company-profile-button"
              href="/hamat-al-ebdaa-company-profile.pdf"
              download="Hamat-Al-ebdaa-Company-Profile.pdf"
              className="group mt-7 inline-flex items-center gap-2.5 rounded-full border border-[#C5A16F]/40 bg-[#C5A16F]/10 px-6 py-3 text-sm font-bold text-[#C5A16F] transition-all duration-300 hover:bg-[#C5A16F] hover:text-[#16091f] hover:shadow-[0_12px_36px_rgba(197,161,111,0.35)]"
            >
              <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              {t.footer.download}
            </a>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-fuchsia-300">{t.footer.quickLinks}</h3>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3">
              {NAV_KEYS.map((key) => (
                <li key={key}>
                  <button
                    data-testid={`footer-link-${key}`}
                    onClick={() => scrollToSection(SECTION_IDS[key])}
                    className="text-sm text-purple-200/60 transition-colors duration-300 hover:text-fuchsia-300"
                  >
                    {t.nav[key]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-fuchsia-300">{t.footer.contactTitle}</h3>
            <ul className="mt-5 flex flex-col gap-4">
              <li>
                <a href="mailto:entertainment@hamatalebdaa.com" data-testid="footer-email-link" className="flex items-center gap-3 text-sm text-purple-200/60 transition-colors hover:text-fuchsia-300">
                  <Mail className="h-4 w-4 shrink-0 text-[#C5A16F]" />
                  <span dir="ltr">entertainment@hamatalebdaa.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+966569969513" data-testid="footer-phone-link" className="flex items-center gap-3 text-sm text-purple-200/60 transition-colors hover:text-fuchsia-300">
                  <Phone className="h-4 w-4 shrink-0 text-[#C5A16F]" />
                  <span dir="ltr">+966 569969513</span>
                </a>
              </li>
              <li>
                <a href="https://instagram.com/Hamat.alebdaa" target="_blank" rel="noopener noreferrer" data-testid="footer-instagram-link" className="flex items-center gap-3 text-sm text-purple-200/60 transition-colors hover:text-fuchsia-300">
                  <Instagram className="h-4 w-4 shrink-0 text-[#C5A16F]" />
                  <span dir="ltr">@Hamat.alebdaa</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-fuchsia-300/10 pt-7 sm:flex-row">
          <p className="text-xs text-purple-200/45">© 2026 {t.footer.rights}</p>
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#C5A16F]/70" data-testid="footer-tagline">{t.footer.madeIn}</p>
        </div>
      </div>
    </footer>
  );
};
