import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-rose-200/50 bg-gradient-to-b from-white/60 to-rose-50/80 px-4 py-12 backdrop-blur-md">
      <div className="mx-auto max-w-3xl text-center">
        <motion.p
          className="font-display bg-gradient-to-r from-stone-700 to-stone-600 bg-clip-text text-xl text-transparent md:text-2xl"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Happy Birthday, Teena — today and always.
        </motion.p>
        <p className="mt-4 text-sm text-stone-500">
          Crafted with care by <span className="font-medium text-rose-600">Mahboob</span> · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
