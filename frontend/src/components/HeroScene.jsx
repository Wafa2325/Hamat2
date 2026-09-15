import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Sparkles, Crown, PenTool } from 'lucide-react';
import { useLang } from '../i18n';

const spring = { stiffness: 70, damping: 18, mass: 0.6 };

const Layer = ({ depth, rx, ry, className, children }) => {
  const x = useTransform(ry, (v) => v * depth * 1.6);
  const y = useTransform(rx, (v) => -v * depth * 1.6);
  return (
    <motion.div style={{ x, y, translateZ: depth * 40 }} className={`absolute ${className}`}>
      {children}
    </motion.div>
  );
};

export const HeroScene = () => {
  const { t } = useLang();
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), spring);
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), spring);

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  const badge = 'flex items-center gap-2.5 rounded-2xl border bg-[#1d0f2c]/90 px-4 py-3 shadow-xl backdrop-blur';

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto aspect-square w-full max-w-[560px] [perspective:1400px]"
      data-testid="hero-visual"
    >
      <motion.div style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }} className="relative h-full w-full">
        <div className="absolute inset-[8%] rounded-full bg-fuchsia-500/25 blur-[90px]" />
        <div className="absolute inset-x-[15%] bottom-[6%] h-[14%] rounded-[100%] bg-[#C5A16F]/25 blur-2xl" />

        <div className="animate-spin-slow absolute inset-[6%] rounded-full border border-dashed border-fuchsia-300/25 [transform:rotateX(70deg)]" />
        <div className="animate-spin-slower absolute inset-[-2%] rounded-full border border-[#C5A16F]/20 [transform:rotateX(70deg)]" />

        <Layer depth={1} rx={rx} ry={ry} className="inset-0 flex items-center justify-center">
          <img
            src="/assets/3d-stage.webp"
            alt="3D event experience by Hamat Al-ebda'a"
            className="animate-float w-[96%] drop-shadow-[0_50px_60px_rgba(8,2,14,0.75)]"
            data-testid="hero-3d-stage"
          />
        </Layer>

        <Layer depth={3} rx={rx} ry={ry} className="start-[-4%] top-[8%] w-[24%]">
          <img src="/assets/3d-balloons.webp" alt="" className="animate-float-slow w-full drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]" />
        </Layer>
        <Layer depth={2.4} rx={rx} ry={ry} className="end-[-2%] top-[2%] w-[20%]">
          <img src="/assets/3d-spotlight.webp" alt="" className="animate-float w-full drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]" style={{ animationDelay: '1.5s' }} />
        </Layer>
        <Layer depth={3.4} rx={rx} ry={ry} className="end-[14%] bottom-[10%] w-[9%]">
          <img src="/assets/3d-star.webp" alt="" className="animate-twinkle w-full" />
        </Layer>
        <Layer depth={2.8} rx={rx} ry={ry} className="start-[18%] bottom-[24%] w-[5%]">
          <img src="/assets/3d-star.webp" alt="" className="animate-twinkle w-full" style={{ animationDelay: '0.8s' }} />
        </Layer>
        <Layer depth={3.8} rx={rx} ry={ry} className="start-[42%] top-[-2%] w-[6%]">
          <img src="/assets/3d-star.webp" alt="" className="animate-twinkle w-full" style={{ animationDelay: '1.6s' }} />
        </Layer>

        <Layer depth={4} rx={rx} ry={ry} className="start-0 sm:start-[-4%] top-[44%]">
          <div className={`${badge} animate-float-slow border-fuchsia-300/25`} data-testid="hero-float-stage">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-fuchsia-500/20 text-fuchsia-300"><Sparkles className="h-5 w-5" /></span>
            <span className="text-xs font-semibold text-purple-100">{t.hero.float1}</span>
          </div>
        </Layer>
        <Layer depth={4.4} rx={rx} ry={ry} className="end-0 sm:end-[-6%] top-[30%]">
          <div className={`${badge} animate-float border-[#C5A16F]/30`} style={{ animationDelay: '1.2s' }} data-testid="hero-float-hospitality">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#C5A16F]/20 text-[#C5A16F]"><Crown className="h-5 w-5" /></span>
            <span className="text-xs font-semibold text-purple-100">{t.hero.float2}</span>
          </div>
        </Layer>
        <Layer depth={4.2} rx={rx} ry={ry} className="start-[24%] bottom-[-2%]">
          <div className={`${badge} animate-float-slow border-fuchsia-300/25`} style={{ animationDelay: '0.6s' }} data-testid="hero-float-identity">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-400/20 text-purple-300"><PenTool className="h-5 w-5" /></span>
            <span className="text-xs font-semibold text-purple-100">{t.hero.float3}</span>
          </div>
        </Layer>
      </motion.div>
    </motion.div>
  );
};
