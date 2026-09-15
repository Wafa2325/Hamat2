import { motion } from 'framer-motion';
import { ArrowDownLeft, ArrowDownRight, Sparkles, Crown, PenTool, Play } from 'lucide-react';
import { useLang, scrollToSection } from '../i18n';

export const Hero = () => {
  const { t, lang } = useLang();
  const Arrow = lang === 'ar' ? ArrowDownLeft : ArrowDownRight;

  return (
    <section id="home" data-testid="hero-section" className="relative overflow-hidden bg-[#120818] pt-28 lg:pt-36 pb-20 lg:pb-28 scroll-mt-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 start-[-10%] h-[34rem] w-[34rem] rounded-full bg-[#8A688A]/30 blur-[140px]" />
        <div className="absolute top-1/3 end-[-12%] h-[30rem] w-[30rem] rounded-full bg-fuchsia-600/20 blur-[150px]" />
        <div className="absolute bottom-[-20%] start-1/3 h-[24rem] w-[24rem] rounded-full bg-[#C5A16F]/10 blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(192,132,252,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(192,132,252,0.05)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_75%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-fuchsia-300/25 bg-fuchsia-400/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-fuchsia-200"
              data-testid="hero-badge"
            >
              <Sparkles className="h-3.5 w-3.5 text-[#C5A16F]" />
              {t.hero.badge}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-purple-50"
              data-testid="hero-headline"
            >
              {t.hero.titleA}{' '}
              <span className="bg-gradient-to-l from-[#C9A6E0] via-fuchsia-400 to-[#C5A16F] bg-clip-text text-transparent">
                {t.hero.titleB}
              </span>{' '}
              {t.hero.titleC}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-purple-200/75"
              data-testid="hero-subtitle"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <button
                data-testid="hero-cta-contact-button"
                onClick={() => scrollToSection('contact')}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-l from-[#8A688A] to-fuchsia-500 px-7 py-3.5 text-sm font-bold text-white shadow-[0_10px_36px_rgba(168,85,247,0.4)] transition-transform duration-300 hover:scale-[1.04] hover:shadow-[0_14px_46px_rgba(168,85,247,0.55)]"
              >
                {t.hero.ctaContact}
                <Arrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </button>
              <button
                data-testid="hero-cta-portfolio-button"
                onClick={() => scrollToSection('work')}
                className="group inline-flex items-center gap-2 rounded-full border border-fuchsia-300/30 bg-white/5 px-7 py-3.5 text-sm font-bold text-purple-100 backdrop-blur transition-colors duration-300 hover:bg-white/10 hover:border-fuchsia-300/50"
              >
                <Play className="h-4 w-4 text-[#C5A16F]" />
                {t.hero.ctaWork}
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.55 }}
              className="mt-10 flex flex-wrap gap-2"
              data-testid="hero-tags"
            >
              {t.hero.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-purple-300/15 bg-[#231238]/70 px-3.5 py-1.5 text-xs font-medium text-purple-200/80">
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
            data-testid="hero-visual"
          >
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-fuchsia-500/25 via-[#8A688A]/20 to-[#C5A16F]/20 blur-2xl" />
            <div className="animate-float relative overflow-hidden rounded-[2rem] border border-fuchsia-300/20 bg-white shadow-[0_40px_90px_rgba(10,4,18,0.6)]">
              <img
                src="/assets/hero-diorama.jpg"
                alt="3D event experience diorama by Hamat Al-ebda'a"
                className="h-auto w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#16091f]/25 via-transparent to-transparent" />
            </div>

            <div className="animate-float-slow absolute -start-4 sm:-start-8 top-8 flex items-center gap-2.5 rounded-2xl border border-fuchsia-300/25 bg-[#1d0f2c]/90 px-4 py-3 shadow-xl backdrop-blur" data-testid="hero-float-stage">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-fuchsia-500/20 text-fuchsia-300"><Sparkles className="h-5 w-5" /></span>
              <span className="text-xs font-semibold text-purple-100">{t.hero.float1}</span>
            </div>
            <div className="animate-float absolute -end-3 sm:-end-6 top-1/3 flex items-center gap-2.5 rounded-2xl border border-[#C5A16F]/30 bg-[#1d0f2c]/90 px-4 py-3 shadow-xl backdrop-blur" style={{ animationDelay: '1.2s' }} data-testid="hero-float-hospitality">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#C5A16F]/20 text-[#C5A16F]"><Crown className="h-5 w-5" /></span>
              <span className="text-xs font-semibold text-purple-100">{t.hero.float2}</span>
            </div>
            <div className="animate-float-slow absolute -bottom-5 start-10 flex items-center gap-2.5 rounded-2xl border border-fuchsia-300/25 bg-[#1d0f2c]/90 px-4 py-3 shadow-xl backdrop-blur" style={{ animationDelay: '0.6s' }} data-testid="hero-float-identity">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-400/20 text-purple-300"><PenTool className="h-5 w-5" /></span>
              <span className="text-xs font-semibold text-purple-100">{t.hero.float3}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
