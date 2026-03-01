'use client';

// Node modules
import { atom, useAtom } from 'jotai';

export const pictures = ['epsom-design02', 'epsom-design03'];

export const pageAtom = atom(1);
export const isHoveringBookAtom = atom(false);
export const isTouchDeviceAtom = atom(false);
export const zoomActionAtom = atom(0);

export const pages = [
  {
    front: 'epsom-design01',
    back: pictures[0],
  },
];

for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: pictures[i],
    back: pictures[i + 1],
  });
}

pages.push({
  front: pictures[pictures.length - 1],
  back: 'epsom-design04',
});

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);
  const [isTouchDevice] = useAtom(isTouchDeviceAtom);
  const [, setZoomAction] = useAtom(zoomActionAtom);

  return (
    <div
      className={`
      absolute inset-0 z-20 pointer-events-none flex flex-col items-center
      justify-between p-10 pb-5 lg:pb-10 select-none text-elysion-cream
    `}
    >
      <h1
        className={`
        text-2xl md:text-4xl font-extrabold uppercase tracking-[0.3em]
        text-elysion-gold text-shadow-lg/30 text-center
      `}
      >
        Project Proposal
      </h1>

      <div className="flex flex-col gap-5 items-center">
        <div className="flex gap-5 md:gap-10 pointer-events-auto items-center">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            className={`
              px-6 py-2 bg-elysion-forest/90 hover:bg-white/20 rounded-full backdrop-blur-md
              transition-all border border-elysion-olive active:scale-95 uppercase
              text-xs md:text-sm shadow-xl/30 text-elysion-cream
              ${page === 0 ? 'opacity-30 pointer-events-none' : ''}
            `}
          >
            Previous
          </button>

          <div className="text-xs md:text-sm font-medium tracking-widest tabular-nums text-elysion-gold text-shadow-lg">
            {page} / {pages.length}
          </div>

          <button
            onClick={() => setPage((p) => Math.min(pages.length, p + 1))}
            className={`
              px-6 py-2 bg-elysion-forest/90 hover:bg-white/20 rounded-full backdrop-blur-md
              transition-all border border-elysion-olive active:scale-95 uppercase
              text-xs md:text-sm shadow-xl/30 text-elysion-cream
              ${page === pages.length ? 'opacity-30 pointer-events-none' : ''}
            `}
          >
            Next
          </button>
        </div>
        <p className="text-sm md:text-base leading-relaxed text-elysion-cream text-center">
          Tips: You can also click on the right-side page to go next, left-side
          to go previous.
        </p>
      </div>

      {isTouchDevice && (
        <div className="absolute right-5 bottom-1/2 translate-y-1/2 flex flex-col gap-3 pointer-events-auto">
          <button
            onPointerDown={() => setZoomAction(1)}
            onPointerUp={() => setZoomAction(0)}
            onPointerLeave={() => setZoomAction(0)}
            className={`
              w-9 h-9 flex items-center justify-center bg-elysion-forest/40 hover:bg-white/20
              rounded-full backdrop-blur-sm transition-all border border-elysion-olive active:scale-95
              text-xl font-bold shadow-xl/30 text-elysion-gold
            `}
            aria-label="Zoom In"
          >
            +
          </button>
          <button
            onPointerDown={() => setZoomAction(-1)}
            onPointerUp={() => setZoomAction(0)}
            onPointerLeave={() => setZoomAction(0)}
            className={`
              w-9 h-9 flex items-center justify-center bg-elysion-forest/40 hover:bg-white/20
              rounded-full backdrop-blur-sm transition-all border border-elysion-olive active:scale-95
              text-xl font-bold shadow-xl/30 text-elysion-gold
            `}
            aria-label="Zoom Out"
          >
            -
          </button>
        </div>
      )}
    </div>
  );
};
