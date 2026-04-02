import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { profilePhotoSrc } from '../data/photos'

export default function Hero() {
  const wrap = useRef(null)
  const reduced = usePrefersReducedMotion()
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 80, damping: 18 })
  const sy = useSpring(my, { stiffness: 80, damping: 18 })
  const tiltX = useTransform(sy, [-0.5, 0.5], [9, -9])
  const tiltY = useTransform(sx, [-0.5, 0.5], [-11, 11])
  const floatX = useTransform(sx, [-0.5, 0.5], [12, -12])
  const floatY = useTransform(sy, [-0.5, 0.5], [8, -8])

  function onMove(e) {
    if (reduced || !wrap.current) return
    const r = wrap.current.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }

  function onLeave() {
    mx.set(0)
    my.set(0)
  }

  return (
    <header
      ref={wrap}
      className="relative z-10 px-4 pt-10 pb-16 text-center md:pt-16 md:pb-28"
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      <motion.p
        className="mb-4 text-sm font-medium uppercase tracking-[0.4em] text-rose-600/95 md:text-base"
        style={{ x: reduced ? 0 : floatX, y: reduced ? 0 : floatY }}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        April 2 — a day worth celebrating
      </motion.p>

      <motion.div
        className="relative z-[2] mx-auto mt-2 flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.88 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.08, type: 'spring', stiffness: 260, damping: 22 }}
      >
        <div className="relative">
          <motion.div
            className="absolute -inset-3 rounded-full bg-gradient-to-r from-rose-400 via-pink-400 to-amber-300 opacity-75 blur-2xl"
            animate={reduced ? {} : { scale: [1, 1.08, 1], opacity: [0.65, 0.9, 0.65] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden
          />
          <div className="relative rounded-full bg-gradient-to-br from-rose-300 via-pink-200 to-amber-200 p-[3px] shadow-[0_20px_50px_-12px_rgba(244,63,94,0.45)] ring-4 ring-white/90">
            <img
              src={profilePhotoSrc}
              alt="Teena"
              width={160}
              height={160}
              className="h-28 w-28 rounded-full object-cover md:h-36 md:w-36"
              decoding="async"
              loading="eager"
            />
          </div>
          <span className="absolute -bottom-2 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/95 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-rose-600 shadow-lg ring-1 ring-rose-100 md:text-sm">
            Teena
          </span>
        </div>
      </motion.div>

      <div className="perspective-[1600px] mx-auto mt-10 max-w-5xl [transform-style:preserve-3d] md:mt-12">
        <motion.div
          className="relative [transform-style:preserve-3d]"
          style={{
            rotateX: reduced ? 0 : tiltX,
            rotateY: reduced ? 0 : tiltY,
          }}
        >
          {/* Glow plate behind title */}
          <motion.div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[min(90vw,520px)] w-[min(95vw,640px)] -translate-x-1/2 -translate-y-1/2 rounded-[40%] bg-gradient-to-br from-rose-300/35 via-pink-200/25 to-amber-200/20 blur-3xl"
            animate={reduced ? {} : { scale: [1, 1.05, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />

          <motion.h1
            className="relative font-display text-4xl font-semibold leading-[1.1] text-stone-800 sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08 }}
          >
            <span className="hero-gradient-text block [transform:translateZ(40px)]">
              Happy Birthday,
            </span>
            <motion.span
              className="mt-3 block bg-gradient-to-br from-stone-800 via-stone-700 to-stone-600 bg-clip-text text-transparent [transform:translateZ(80px)]"
              style={{
                filter: reduced ? undefined : 'drop-shadow(0 12px 28px rgba(244,63,94,0.25))',
              }}
            >
              Teena
            </motion.span>
          </motion.h1>
        </motion.div>
      </div>

      <motion.p
        className="relative z-[1] mx-auto mt-8 max-w-xl text-lg leading-relaxed text-stone-600 md:text-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Here is a little corner of the internet, just for you — with warmth, good wishes, and memories in frames.
      </motion.p>

      <motion.div
        className="relative z-[1] mt-10 flex flex-wrap items-center justify-center gap-3"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.5 }}
      >
        <motion.span
          className="inline-flex items-center gap-2 rounded-full border border-rose-200/90 bg-white/80 px-5 py-2.5 text-sm font-medium text-rose-900 shadow-[0_8px_32px_-8px_rgba(244,63,94,0.35)] backdrop-blur-md [transform-style:preserve-3d]"
          whileHover={reduced ? {} : { scale: 1.05, y: -4, rotateX: 8, boxShadow: '0 20px 48px -12px rgba(244,63,94,0.45)' }}
          transition={{ type: 'spring', stiffness: 400, damping: 22 }}
        >
          <span className="text-lg" aria-hidden>
            ✨
          </span>
          Charming wishes &amp; respect
        </motion.span>
      </motion.div>

      <motion.div
        className="relative z-[1] mt-14 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.95 }}
      >
        <motion.a
          href="#wishes"
          className="group inline-flex flex-col items-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold text-rose-700 transition-colors hover:text-rose-800"
          whileHover={reduced ? {} : { y: -2 }}
        >
          <span>Read the wishes</span>
          <motion.span
            className="text-2xl leading-none"
            animate={reduced ? {} : { y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden
          >
            ↓
          </motion.span>
        </motion.a>
      </motion.div>
    </header>
  )
}
