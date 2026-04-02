/** Public paths — all photos in public/images */
const BASE_PATH = '/images'

export const photoPaths = [
  'WhatsApp Image 2026-03-09 at 20.31.32.jpeg',
  'WhatsApp Image 2026-03-09 at 20.31.33 (1).jpeg',
  'WhatsApp Image 2026-03-09 at 20.31.33.jpeg',
  'WhatsApp Image 2026-03-09 at 20.32.10.jpeg',
  'WhatsApp Image 2026-03-09 at 20.32.11.jpeg',
  'WhatsApp Image 2026-03-09 at 20.32.13.jpeg',
  'WhatsApp Image 2026-03-09 at 20.32.14.jpeg',
  'WhatsApp Image 2026-03-09 at 20.32.15.jpeg',
  'WhatsApp Image 2026-03-09 at 20.32.16.jpeg',
  'WhatsApp Image 2026-03-09 at 20.32.17.jpeg',
  'WhatsApp Image 2026-03-20 at 19.17.05.jpeg',
  'WhatsApp Image 2026-03-20 at 19.17.07.jpeg',
  'image1.jpeg'
].map(filename => `${BASE_PATH}/${filename}`)

/** Hero profile / display picture */
export const profilePhotoSrc = `${BASE_PATH}/photo-1.jpeg`

/** Bottom “together” photo */
export const bottomCouplePhotoSrc = `${BASE_PATH}/image1.jpeg` 
// ⚠️ make sure file name is EXACT: image1.jpeg (not imag1.jpeg)