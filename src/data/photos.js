/** Public paths — 13 photos in public/images */
export const PHOTO_COUNT = 13

const BASE_PATH = '/images'

export const photoPaths = Array.from(
  { length: PHOTO_COUNT },
  (_, i) => `${BASE_PATH}/photo-${i + 1}.jpeg`
)

/** Hero profile / display picture */
export const profilePhotoSrc = `${BASE_PATH}/photo-1.jpeg`

/** Bottom “together” photo */
export const bottomCouplePhotoSrc = `${BASE_PATH}/image1.jpeg` 
// ⚠️ make sure file name is EXACT: image1.jpeg (not imag1.jpeg)