import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLang } from '../i18n';

export const Preloader = () => {
  const { t } = useLang();
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const duration = 2200;
    let raf;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      setProgress(Math.round((1 - Math.pow(1 - p, 3)) * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 350);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    document.body.style.overflow = done ? '' : 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          data-testid="preloader"
          exit={{ opacity: 0, scale: 1.04, filter: 'blur(8px)' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#0d0512] text-purple-50"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(192,132,252,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(192,132,252,0.06)_1px,transparent_1px)] bg-[size:64px_64px]" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.06] brand-pattern-light [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
          <div className="pointer-events-none absolute h-[28rem] w-[28rem] rounded-full bg-fuchsia-600/15 blur-[140px]" />

          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="relative inline-flex items-center justify-center rounded-2xl bg-white p-3 shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
          >
            <img
              src="/assets/logo-hamat-new.png"
              alt="Hamat Al-ebda'a"
              className="h-20 w-auto sm:h-24"
              data-testid="preloader-logo"
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}
            className="relative mt-8 text-base sm:text-lg font-semibold tracking-wide text-purple-200/80"
            data-testid="preloader-company-name"
          >
            {t.preloader.name}
          </motion.p>

          <div className="relative mt-10 h-px w-64 sm:w-80 bg-purple-200/15" data-testid="preloader-progress-bar">
            <div className="absolute inset-y-0 start-0 bg-gradient-to-l from-[#C5A16F] to-fuchsia-400 shadow-[0_0_14px_rgba(232,121,249,0.8)]" style={{ width: `${progress}%` }} />
          </div>
          <p className="relative mt-4 text-sm font-bold tabular-nums text-[#C5A16F]" data-testid="preloader-percentage" dir="ltr">
            {progress}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
