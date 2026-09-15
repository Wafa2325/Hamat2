import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Crown, PenTool } from 'lucide-react';
import { useLang } from '../i18n';

const Stage3D = lazy(() => import('./Stage3D').then((m) => ({ default: m.Stage3D })));

const hasWebGL = () => {
  try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch { return false; }
};

const Badge = ({ className, style, testId, icon, iconClass, label }) => (
  <div className={`absolute flex items-center gap-2.5 rounded-2xl border bg-[#1d0f2c]/90 px-4 py-3 shadow-xl backdrop-blur ${className}`} style={style} data-testid={testId}>
    <span className={`flex h-9 w-9 items-center justify-center rounded-xl ${iconClass}`}>{icon}</span>
    <span className="text-xs font-semibold text-purple-100">{label}</span>
  </div>
);

export const HeroScene = () => {
  const { t } = useLang();
  const ref = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const [webgl, setWebgl] = useState(true);
  useEffect(() => { setWebgl(hasWebGL()); }, []);

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    mouse.current = { x: (e.clientX - r.left) / r.width - 0.5, y: (e.clientY - r.top) / r.height - 0.5 };
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => { mouse.current = { x: 0, y: 0 }; }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto aspect-square w-full max-w-[600px]"
      data-testid="hero-visual"
    >
      <div className="absolute inset-[10%] rounded-full bg-fuchsia-500/20 blur-[100px]" />
      <div className="absolute inset-[-12%] [mask-image:radial-gradient(circle_at_center,black_45%,transparent_78%)]" data-testid="hero-3d-stage">
        {webgl ? (
          <Suspense fallback={null}><Stage3D mouse={mouse} /></Suspense>
        ) : (
          <img src="/assets/3d-stage.webp" alt="3D event stage by Hamat Al-ebda'a" className="animate-float h-full w-full object-contain" />
        )}
      </div>

      <Badge className="animate-float-slow start-0 sm:start-[-4%] top-[40%] border-fuchsia-300/25" testId="hero-float-stage" icon={<Sparkles className="h-5 w-5" />} iconClass="bg-fuchsia-500/20 text-fuchsia-300" label={t.hero.float1} />
      <Badge className="animate-float end-0 sm:end-[-6%] top-[22%] border-[#C5A16F]/30" style={{ animationDelay: '1.2s' }} testId="hero-float-hospitality" icon={<Crown className="h-5 w-5" />} iconClass="bg-[#C5A16F]/20 text-[#C5A16F]" label={t.hero.float2} />
      <Badge className="animate-float-slow start-[22%] bottom-[2%] border-fuchsia-300/25" style={{ animationDelay: '0.6s' }} testId="hero-float-identity" icon={<PenTool className="h-5 w-5" />} iconClass="bg-purple-400/20 text-purple-300" label={t.hero.float3} />
    </motion.div>
  );
};
