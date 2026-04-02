import { motion } from 'framer-motion'
import { photoPaths } from '../data/photos'
import { galleryCards } from '../data/galleryLayout'
import TiltPhoto from './TiltPhoto'
import GalleryFrame from './GalleryFrame'

export default function PhotoGallery() {
  return (
    <section id="memories" className="relative z-10 px-4 pb-24 md:pb-32">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="font-display text-center text-3xl font-semibold text-stone-800 drop-shadow-sm md:text-5xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Moments in frames
        </motion.h2>

        <div
          className="mt-12 grid grid-cols-2 grid-flow-dense gap-3 sm:gap-4 md:mt-14 md:grid-cols-4 md:gap-5"
          style={{ gridAutoRows: 'minmax(120px, auto)' }}
        >
          {photoPaths.map((src, index) => {
            const layout = galleryCards[index] ?? galleryCards[0]
            return (
              <motion.div
                key={src}
                className={`${layout.grid} ${layout.minH} min-w-0`}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: Math.min(index * 0.04, 0.35) }}
              >
                <TiltPhoto className="h-full">
                  <div className="h-full min-h-0">
                    <GalleryFrame variant={layout.variant}>
                      <img
                        src={src}
                        alt={`Teena — gallery ${index + 1}`}
                        className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.07] group-hover:brightness-[1.04]"
                        loading={index < 4 ? 'eager' : 'lazy'}
                        decoding="async"
                      />
                    </GalleryFrame>
                  </div>
                </TiltPhoto>
                <span className="sr-only">Photo {index + 1} of Teena</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

