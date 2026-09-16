import { useEffect, useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLang, scrollToSection } from '../i18n';

const NAV_KEYS = ['home', 'about', 'services', 'expertise', 'work', 'clients', 'whyus', 'contact'];
const SECTION_IDS = { home: 'home', about: 'about', services: 'services', expertise: 'expertise', work: 'work', clients: 'clients', whyus: 'why-us', contact: 'contact' };

export const Header = () => {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (key) => {
    setOpen(false);
    scrollToSection(SECTION_IDS[key]);
  };

  return (
    <header
      data-testid="header-nav-container"
      className={`fixed top-0 inset-x-0 z-50 transition-[background-color,box-shadow,border-color] duration-500 border-b ${
        scrolled
          ? 'bg-[#16091f]/85 backdrop-blur-xl border-fuchsia-400/15 shadow-[0_8px_40px_rgba(10,4,18,0.55)]'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 lg:h-20 items-center justify-between gap-4">
          <button
            data-testid="header-brand-logo"
            onClick={() => go('home')}
            className="flex items-center shrink-0"
            aria-label="Hamat Al-ebda'a home"
          >
            <span className="flex items-center justify-center rounded-2xl bg-white p-1.5 shadow-[0_6px_20px_rgba(0,0,0,0.25)]">
              <img src="/assets/logo-hamat-new.png" alt="Hamat Al-ebda'a" className="h-10 lg:h-12 w-auto" />
            </span>
          </button>

          <nav className="hidden xl:flex items-center gap-1" aria-label="Primary">
            {NAV_KEYS.map((key) => (
              <button
                key={key}
                data-testid={`nav-link-${key}`}
                onClick={() => go(key)}
                className={`px-3 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                  key === 'contact'
                    ? 'ms-2 bg-gradient-to-l from-[#8A688A] to-fuchsia-500 text-white hover:shadow-[0_0_24px_rgba(192,132,252,0.5)]'
                    : 'text-purple-100/80 hover:text-white hover:bg-white/5'
                }`}
              >
                {t.nav[key]}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div
              data-testid="header-lang-switcher-button"
              className="flex items-center rounded-full border border-fuchsia-300/25 bg-white/5 p-1 backdrop-blur"
            >
              <Globe className="mx-1.5 h-3.5 w-3.5 text-fuchsia-300" />
              <button
                data-testid="lang-switch-en"
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-colors duration-300 ${
                  lang === 'en' ? 'bg-fuchsia-400 text-[#1a0b26]' : 'text-purple-100/70 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                data-testid="lang-switch-ar"
                onClick={() => setLang('ar')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-colors duration-300 ${
                  lang === 'ar' ? 'bg-fuchsia-400 text-[#1a0b26]' : 'text-purple-100/70 hover:text-white'
                }`}
              >
                العربية
              </button>
            </div>
            <button
              data-testid="mobile-menu-toggle"
              onClick={() => setOpen(!open)}
              className="xl:hidden p-2 rounded-full text-purple-100 hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div data-testid="mobile-menu" className="xl:hidden bg-[#16091f]/95 backdrop-blur-xl border-t border-fuchsia-400/15">
          <div className="px-4 py-4 flex flex-col gap-1">
            {NAV_KEYS.map((key) => (
              <button
                key={key}
                data-testid={`mobile-nav-link-${key}`}
                onClick={() => go(key)}
                className="text-start px-4 py-3 rounded-xl text-sm font-medium text-purple-100/85 hover:bg-white/5 hover:text-white transition-colors"
              >
                {t.nav[key]}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
