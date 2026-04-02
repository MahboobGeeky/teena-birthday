import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const blobs = [
  { className: 'left-[2%] top-[6%] h-72 w-72 md:h-96 md:w-96', from: 'from-rose-400/50', to: 'to-fuchsia-400/30', duration: 22, x: [0, 40, -20, 0], y: [0, -30, 20, 0] },
  { className: 'right-[0%] top-[12%] h-64 w-64 md:h-80 md:w-80', from: 'from-amber-300/45', to: 'to-orange-300/25', duration: 26, x: [0, -35, 25, 0], y: [0, 25, -15, 0] },
  { className: 'bottom-[8%] left-[8%] h-56 w-56 md:h-72 md:w-72', from: 'from-pink-400/40', to: 'to-rose-300/30', duration: 20, x: [0, 30, -25, 0], y: [0, -20, 30, 0] },
  { className: 'bottom-[18%] right-[12%] h-48 w-48 md:h-64 md:w-64', from: 'from-violet-300/35', to: 'to-pink-300/25', duration: 24, x: [0, -28, 18, 0], y: [0, 35, -22, 0] },
]

const orbs = [
  { top: '10%', left: '15%', size: 'w-20 h-20 md:w-28 md:h-28', delay: 0, hue: 'from-rose-200/70 to-pink-300/50' },
  { top: '25%', right: '18%', size: 'w-14 h-14 md:w-20 md:h-20', delay: 0.4, hue: 'from-amber-200/70 to-orange-200/50' },
  { bottom: '35%', left: '6%', size: 'w-16 h-16 md:w-24 md:h-24', delay: 0.8, hue: 'from-fuchsia-200/60 to-pink-200/45' },
  { bottom: '12%', right: '22%', size: 'w-12 h-12 md:w-16 md:h-16', delay: 1.2, hue: 'from-rose-100/90 to-blush-300/55' },
  { top: '45%', left: '42%', size: 'w-10 h-10 md:w-14 md:h-14', delay: 0.6, hue: 'from-white/80 to-rose-200/40' },
]

const sparkles = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  left: `${(i * 17 + 7) % 100}%`,
  top: `${(i * 23 + 11) % 100}%`,
  delay: (i % 8) * 0.35,
  scale: 0.4 + (i % 5) * 0.15,
}))

export default function AnimatedBackdrop() {
  const reduced = usePrefersReducedMotion()

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {/* Slow rotating conic wash */}
      <motion.div
        className="absolute -left-1/2 -top-1/2 h-[200%] w-[200%] opacity-[0.12]"
        style={{
          background: 'conic-gradient(from 0deg at 50% 50%, #fda4af, #fbbf24, #e879f9, #fda4af)',
        }}
        animate={reduced ? {} : { rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
      />

      {/* Drifting mesh blobs */}
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full bg-gradient-to-br ${b.from} ${b.to} blur-3xl ${b.className}`}
          animate={reduced ? {} : { x: b.x, y: b.y, scale: [1, 1.08, 0.95, 1] }}
          transition={{
            duration: b.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Secondary glow pulses */}
      <motion.div
        className="absolute left-1/4 top-1/3 h-[min(90vw,520px)] w-[min(90vw,520px)] -translate-x-1/2 rounded-full bg-gradient-radial from-rose-300/25 via-pink-200/10 to-transparent blur-3xl"
        animate={reduced ? {} : { scale: [1, 1.15, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-gradient-radial from-amber-200/30 to-transparent blur-3xl md:h-[28rem] md:w-[28rem]"
        animate={reduced ? {} : { scale: [1.08, 1, 1.08], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      {/* 3D-style floating orbs */}
      {orbs.map((o, i) => (
        <motion.div
          key={i}
          className={`absolute ${o.size} rounded-full bg-gradient-to-br ${o.hue} shadow-lg shadow-rose-300/20 [transform-style:preserve-3d]`}
          style={{ top: o.top, left: o.left, right: o.right, bottom: o.bottom }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={
            reduced
              ? { opacity: 0.6, scale: 1 }
              : {
                  opacity: [0.55, 0.92, 0.55],
                  y: [0, -22, 0],
                  x: [0, i % 2 === 0 ? 14 : -14, 0],
                  scale: [1, 1.1, 1],
                  rotate: [0, i % 2 === 0 ? 8 : -8, 0],
                }
          }
          transition={{
            opacity: { duration: 4, repeat: Infinity, delay: o.delay },
            y: { duration: 6 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: o.delay },
            x: { duration: 7 + i * 0.3, repeat: Infinity, ease: 'easeInOut', delay: o.delay },
            scale: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: o.delay },
            rotate: { duration: 9 + i, repeat: Infinity, ease: 'easeInOut', delay: o.delay },
          }}
        />
      ))}

      {/* Sparkle field */}
      {sparkles.map((s) => (
        <motion.div
          key={s.id}
          className="absolute h-1 w-1 rounded-full bg-white shadow-[0_0_8px_2px_rgba(255,255,255,0.9)] md:h-1.5 md:w-1.5"
          style={{ left: s.left, top: s.top }}
          animate={
            reduced
              ? { opacity: 0.3 }
              : {
                  opacity: [0.2, 1, 0.2],
                  scale: [s.scale, s.scale * 1.8, s.scale],
                }
          }
          transition={{
            duration: 2.5 + (s.id % 4) * 0.4,
            repeat: Infinity,
            delay: s.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Moving grid (subtle depth) */}
      <motion.div
        className="absolute inset-0 opacity-[0.035] [mask-image:linear-gradient(to_bottom,black,transparent)]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(190,24,93,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(190,24,93,0.4) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        animate={reduced ? {} : { backgroundPosition: ['0px 0px', '48px 48px'] }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  )
}
