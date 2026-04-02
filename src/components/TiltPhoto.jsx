import { useRef } from 'react'
import { motion, useMotionValue, useMotionTemplate, useSpring, useTransform } from 'framer-motion'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const springConfig = { stiffness: 280, damping: 24, mass: 0.55 }

export default function TiltPhoto({ children, className = '' }) {
  const ref = useRef(null)
  const reduced = usePrefersReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, springConfig)
  const sy = useSpring(y, springConfig)
  const rotateX = useTransform(sy, [-0.5, 0.5], [16, -16])
  const rotateY = useTransform(sx, [-0.5, 0.5], [-16, 16])
  const glareX = useTransform(sx, [-0.5, 0.5], ['88%', '12%'])
  const glareY = useTransform(sy, [-0.5, 0.5], ['88%', '12%'])
  const glareBg = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.55) 0%, transparent 52%)`

  function handlePointer(e) {
    if (reduced || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    x.set(px)
    y.set(py)
  }

  function handleLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <div className={`perspective-[1600px] [transform-style:preserve-3d] ${className}`}>
      <motion.div
        ref={ref}
        className="group/tilt relative h-full min-h-0 [transform-style:preserve-3d]"
        style={{
          rotateX: reduced ? 0 : rotateX,
          rotateY: reduced ? 0 : rotateY,
        }}
        onPointerMove={handlePointer}
        onPointerLeave={handleLeave}
        whileHover={reduced ? {} : { scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 320, damping: 26 }}
      >
        {children}
        {!reduced && (
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-2xl mix-blend-soft-light"
            style={{ background: glareBg }}
            aria-hidden
          />
        )}
      </motion.div>
    </div>
  )
}
