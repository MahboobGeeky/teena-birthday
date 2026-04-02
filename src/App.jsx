import AnimatedBackdrop from './components/AnimatedBackdrop'
import Hero from './components/Hero'
import Wishes from './components/Wishes'
import PhotoGallery from './components/PhotoGallery'
import BottomCouplePhoto from './components/BottomCouplePhoto'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="grain relative min-h-screen overflow-x-hidden bg-gradient-to-b from-blush-50/95 via-cream to-rose-100/80">
      <AnimatedBackdrop />
      <main className="relative z-10">
        <Hero />
        <Wishes />
        <PhotoGallery />
        <BottomCouplePhoto />
      </main>
      <Footer />
    </div>
  )
}
