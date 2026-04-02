import { motion } from 'framer-motion'
import { bottomCouplePhotoSrc } from '../data/photos'

export default function BottomCouplePhoto() {
  return (
    <section
      className="relative z-10 px-4 pb-6 pt-4 md:pb-10 md:pt-8"
      aria-labelledby="bottom-photo-heading"
    >
      <div className="mx-auto max-w-5xl lg:max-w-6xl">
        <motion.h2
          id="bottom-photo-heading"
          className="sr-only"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Photo together
        </motion.h2>

        <motion.div
          className="relative mx-auto w-full max-w-4xl md:max-w-5xl"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute -inset-1 rounded-[1.75rem] bg-gradient-to-br from-rose-300/80 via-pink-200/60 to-amber-200/50 blur-xl md:-inset-2 md:rounded-[2rem]" aria-hidden />
          <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-white to-rose-50/90 p-[3px] shadow-[0_28px_80px_-20px_rgba(219,39,119,0.4)] ring-1 ring-rose-100/80 md:rounded-[1.85rem] md:p-1">
            <div className="overflow-hidden rounded-[1.35rem] bg-stone-100 ring-1 ring-white/60 md:rounded-[1.65rem]">
              <img
                src={bottomCouplePhotoSrc}
                alt="Teena with a friend — a moment together"
                className="h-auto w-full max-h-[min(72vh,640px)] object-cover object-center md:max-h-[min(78vh,720px)]"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          <p className="mt-4 text-center font-medium text-stone-600 md:text-lg">Together</p>
        </motion.div>
      </div>
    </section>
  )
}
