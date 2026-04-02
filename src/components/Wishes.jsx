import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Wishes() {
  const ref = useRef(null)
  const reduced = usePrefersReducedMotion()
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 120, damping: 20 })
  const sy = useSpring(my, { stiffness: 120, damping: 20 })
  const rotateX = useTransform(sy, [-0.5, 0.5], [7, -7])
  const rotateY = useTransform(sx, [-0.5, 0.5], [-8, 8])

  function onMove(e) {
    if (reduced || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }

  function onLeave() {
    mx.set(0)
    my.set(0)
  }

  return (
    <section
      id="wishes"
      className="relative z-10 mx-auto max-w-3xl scroll-mt-8 px-4 py-16 md:py-24"
    >
      <motion.h2
        className="font-display text-center text-3xl font-semibold text-stone-800 drop-shadow-sm md:text-4xl"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
      >
        A note for you
      </motion.h2>

      <div className="perspective-[2000px] mt-10">
        <motion.div
          ref={ref}
          className="rounded-[2rem] bg-gradient-to-br from-rose-300/90 via-pink-200/70 to-amber-200/60 p-[1px] shadow-[0_20px_60px_-20px_rgba(244,63,94,0.35)] [transform-style:preserve-3d]"
          style={{
            rotateX: reduced ? 0 : rotateX,
            rotateY: reduced ? 0 : rotateY,
          }}
          onPointerMove={onMove}
          onPointerLeave={onLeave}
        >
          <motion.div
            className="wish-card rounded-[calc(2rem-1px)] border border-white/60 bg-white/75 p-8 shadow-[0_24px_80px_-12px_rgba(244,63,94,0.25),0_0_0_1px_rgba(255,255,255,0.5)_inset] backdrop-blur-xl md:p-12"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            whileHover={
              reduced
                ? {}
                : {
                    boxShadow:
                      '0 32px 100px -16px rgba(244,63,94,0.35), 0 0 0 1px rgba(255,255,255,0.6) inset',
                  }
            }
            transition={{ type: 'spring', stiffness: 260, damping: 28 }}
          >
            <motion.p className="font-display text-xl italic leading-relaxed text-stone-700 md:text-2xl" variants={item}>
              Dear Teena,
            </motion.p>
            <motion.p className="mt-6 leading-relaxed text-stone-600 md:text-lg" variants={item}>
              On your special day — April 2nd — I hope you feel appreciated for the kind, wonderful person you are. May
              this year bring you calm days, bright surprises, and moments that make you smile when you look back on
              them.
            </motion.p>
            <motion.p className="mt-4 leading-relaxed text-stone-600 md:text-lg" variants={item}>
              Thank you for being a friend worth celebrating. Wishing you health, happiness, and everything gentle and
              good ahead.
            </motion.p>
            <motion.div className="mt-10 border-t border-rose-100/90 pt-8" variants={item}>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-rose-500/90">Warm regards,</p>
              <p className="font-display mt-3 bg-gradient-to-r from-rose-700 via-pink-600 to-rose-600 bg-clip-text text-3xl font-semibold text-transparent drop-shadow-sm md:text-4xl">
                Mahboob
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
