/** Public paths — 13 photos in public/images */
export const PHOTO_COUNT = 13
export const photoPaths = Array.from({ length: PHOTO_COUNT }, (_, i) => `/images/photo-${i + 1}.jpeg`)

/** Hero profile / display picture (same file may appear again in the gallery) */
export const profilePhotoSrc = '/images/photo-1.jpeg'

/** Bottom “together” photo (boy & girl / friends) — replace `public/images/couple.jpeg` with your picture */
export const bottomCouplePhotoSrc = '/images/couple.jpeg'
