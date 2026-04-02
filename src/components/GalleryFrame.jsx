/**
 * Visual wrappers for gallery variants — keeps each card feeling distinct.
 */
export default function GalleryFrame({ variant, children }) {
  const v = variant ?? 'soft'

  const shells = {
    feature: (
      <div className="group relative h-full min-h-0 overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-rose-400 via-pink-400 to-amber-300 p-[3px] shadow-[0_24px_60px_-12px_rgba(219,39,119,0.45)]">
        <div className="relative h-full min-h-[inherit] overflow-hidden rounded-[1.6rem] bg-stone-900 ring-1 ring-white/20">
          {children}
        </div>
        <div
          className="pointer-events-none absolute inset-0 rounded-[1.75rem] bg-gradient-to-tr from-white/25 via-transparent to-transparent opacity-40"
          aria-hidden
        />
      </div>
    ),

    circle: (
      <div className="group relative mx-auto flex h-full min-h-0 max-w-[200px] items-center justify-center sm:max-w-none">
        <div className="aspect-square w-full max-w-[200px] overflow-hidden rounded-full bg-gradient-to-br from-rose-200 to-pink-300 p-1 shadow-[0_16px_40px_-8px_rgba(236,72,153,0.5)] ring-4 ring-white/90">
          <div className="h-full w-full overflow-hidden rounded-full bg-stone-100">{children}</div>
        </div>
      </div>
    ),

    tall: (
      <div className="group relative h-full min-h-0 overflow-hidden rounded-2xl border-4 border-white bg-white shadow-[0_20px_50px_-12px_rgba(15,23,42,0.2)]">
        <div className="relative h-full min-h-[inherit] overflow-hidden rounded-[0.65rem] bg-stone-200">{children}</div>
        <div className="pointer-events-none absolute inset-x-3 top-3 h-1 rounded-full bg-white/50 shadow-sm" aria-hidden />
      </div>
    ),

    wide: (
      <div className="group relative h-full min-h-0 overflow-hidden rounded-2xl bg-stone-900/90 p-1 shadow-xl ring-1 ring-stone-700/50">
        <div className="relative aspect-[16/9] min-h-[inherit] w-full overflow-hidden rounded-[0.85rem] sm:aspect-auto sm:h-full">
          {children}
        </div>
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10"
          aria-hidden
        />
      </div>
    ),

    polaroid: (
      <div className="group relative h-full min-h-0 overflow-hidden rounded-sm bg-white p-2 pb-8 shadow-[0_12px_30px_-8px_rgba(0,0,0,0.2)] ring-1 ring-stone-200/80">
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-stone-100">{children}</div>
        <div className="absolute bottom-2 left-0 right-0 text-center font-display text-[10px] uppercase tracking-[0.35em] text-stone-400">
          memory
        </div>
      </div>
    ),

    soft: (
      <div className="group relative h-full min-h-0 overflow-hidden rounded-2xl bg-gradient-to-b from-white to-rose-50/80 p-1 shadow-[0_8px_32px_-6px_rgba(244,114,182,0.35)]">
        <div className="relative h-full min-h-[inherit] overflow-hidden rounded-[0.85rem]">{children}</div>
      </div>
    ),

    film: (
      <div className="group relative flex h-full min-h-0 flex-col overflow-hidden rounded-lg bg-zinc-900 p-2 shadow-2xl ring-1 ring-zinc-700">
        <div className="flex min-h-0 flex-1 gap-1">
          <div className="flex w-2 shrink-0 flex-col justify-between py-1">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="h-2 w-2 rounded-[1px] bg-zinc-600/80" aria-hidden />
            ))}
          </div>
          <div className="relative h-full min-h-[120px] min-w-0 flex-1 overflow-hidden rounded-sm bg-black sm:min-h-[140px]">
            {children}
          </div>
          <div className="flex w-2 shrink-0 flex-col justify-between py-1">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="h-2 w-2 rounded-[1px] bg-zinc-600/80" aria-hidden />
            ))}
          </div>
        </div>
      </div>
    ),

    arch: (
      <div className="group relative h-full min-h-0 overflow-hidden rounded-t-[2.5rem] rounded-b-2xl border-[3px] border-rose-100 bg-white shadow-[0_18px_44px_-12px_rgba(190,24,93,0.25)]">
        <div className="relative h-full min-h-[inherit] overflow-hidden">{children}</div>
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-rose-900/20 to-transparent"
          aria-hidden
        />
      </div>
    ),

    sticker: (
      <div className="group relative h-full min-h-0 -rotate-1 overflow-hidden rounded-xl border-[6px] border-white bg-white shadow-[4px_12px_24px_-4px_rgba(0,0,0,0.2)] sm:rotate-[-2deg]">
        <div className="relative h-full min-h-[inherit] overflow-hidden rounded-md">{children}</div>
        <div
          className="pointer-events-none absolute -right-1 -top-1 h-10 w-10 rounded-full bg-amber-200/40 blur-xl"
          aria-hidden
        />
      </div>
    ),

    glass: (
      <div className="group relative h-full min-h-0 overflow-hidden rounded-2xl border border-white/40 bg-white/30 p-[2px] shadow-[0_12px_40px_-8px_rgba(244,63,94,0.35)] backdrop-blur-md">
        <div className="relative h-full min-h-[inherit] overflow-hidden rounded-[0.9rem] ring-1 ring-white/50">
          {children}
        </div>
      </div>
    ),

    mini: (
      <div className="group relative h-full min-h-0 overflow-hidden rounded-xl bg-gradient-to-tr from-amber-100/80 to-rose-100 p-[2px] shadow-md">
        <div className="relative h-full min-h-[inherit] overflow-hidden rounded-[0.65rem]">{children}</div>
      </div>
    ),

    double: (
      <div className="group relative h-full min-h-0 overflow-hidden rounded-2xl border-4 border-double border-rose-200/90 bg-rose-50/50 p-1 shadow-inner">
        <div className="relative h-full min-h-[inherit] overflow-hidden rounded-[0.75rem] ring-2 ring-rose-300/40">
          {children}
        </div>
      </div>
    ),

    banner: (
      <div className="group relative h-full min-h-0 overflow-hidden rounded-[1.25rem] bg-gradient-to-r from-pink-500 via-rose-400 to-amber-300 p-[2px] shadow-[0_16px_48px_-10px_rgba(236,72,153,0.5)]">
        <div className="relative flex h-full min-h-[inherit] overflow-hidden rounded-[1.1rem] bg-stone-900">
          {children}
        </div>
      </div>
    ),
  }

  return shells[v] ?? shells.soft
}
