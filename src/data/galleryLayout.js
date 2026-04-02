/**
 * Bento gallery: each index has grid span + visual variant.
 * Base: 2 cols → md: 4 cols, dense flow fills gaps.
 */
export const galleryCards = [
  { grid: 'col-span-2 row-span-2', minH: 'min-h-[200px] md:min-h-[260px]', variant: 'feature' },
  { grid: 'col-span-1', minH: 'min-h-[130px] md:min-h-[150px]', variant: 'circle' },
  { grid: 'col-span-1 row-span-2', minH: 'min-h-[200px] md:min-h-0', variant: 'tall' },
  { grid: 'col-span-2', minH: 'min-h-[150px] md:min-h-[180px]', variant: 'wide' },
  { grid: 'col-span-1', minH: 'min-h-[130px] md:min-h-[150px]', variant: 'polaroid' },
  { grid: 'col-span-1', minH: 'min-h-[130px] md:min-h-[150px]', variant: 'soft' },
  { grid: 'col-span-2', minH: 'min-h-[160px] md:min-h-[190px]', variant: 'film' },
  { grid: 'col-span-1 row-span-2', minH: 'min-h-[200px] md:min-h-0', variant: 'arch' },
  { grid: 'col-span-1', minH: 'min-h-[130px] md:min-h-[150px]', variant: 'sticker' },
  { grid: 'col-span-2', minH: 'min-h-[150px] md:min-h-[170px]', variant: 'glass' },
  { grid: 'col-span-1', minH: 'min-h-[130px] md:min-h-[150px]', variant: 'mini' },
  { grid: 'col-span-1', minH: 'min-h-[130px] md:min-h-[150px]', variant: 'double' },
  { grid: 'col-span-2', minH: 'min-h-[160px] md:min-h-[200px]', variant: 'banner' },
]
