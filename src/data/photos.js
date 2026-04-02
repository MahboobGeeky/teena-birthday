/** Public paths — all photos in public/images */
const BASE_PATH = '/images'

export const photoPaths = [
  'photo-1.jpeg',
  'photo-2.jpeg',
  'photo-3.jpeg',
  'photo-4.jpeg',
  'photo-5.jpeg',
  'photo-6.jpeg',
  'photo-7.jpeg',
  'photo-8.jpeg',
  'photo-9.jpeg',
  'photo-10.jpeg',
  'photo-12.jpeg',
  'photo-13.jpeg',
  'couple.jpeg'
].map(filename => `${BASE_PATH}/${filename}`)

/** Hero profile / display picture */
export const profilePhotoSrc = `${BASE_PATH}/photo-1.jpeg`

/** Bottom “together” photo */
export const bottomCouplePhotoSrc = `${BASE_PATH}/couple.jpeg`