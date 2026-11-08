import { cn } from '../lib/ui';


const PLACEHOLDER_BG =
  'bg-no-repeat bg-position-[28px_76px,28px_108px] bg-size-[46%_18px,30%_10px] bg-[radial-gradient(circle_at_80%_20%,rgba(91,167,227,0.48),transparent_38%),linear-gradient(135deg,var(--c),#0a1536)]';

export default function MockFrame({ src, alt = '', label = 'Project preview', color = 'var(--color-royal)', height = 360, className = 'relative rounded-card', style }) {
  return (
    <div
      className={cn(
        'overflow-hidden bg-(color:--c) shadow-[0_30px_60px_-20px_rgba(2,8,30,0.55)] transition-transform duration-500 ease-soft hover:transform-[perspective(900px)_rotateX(2deg)_rotateY(-4deg)_scale(1.03)]',
        !src && PLACEHOLDER_BG,
        className
      )}
      style={{ '--c': color, height, ...style }}
    >
      {/* fake browser bar */}
      <div className='flex h-[34px] items-center gap-[7px] bg-[rgba(0,0,0,0.22)] px-3.5'>
        <i className='size-[9px] rounded-full bg-[rgba(255,255,255,0.55)]' />
        <i className='size-[9px] rounded-full bg-[rgba(255,255,255,0.55)]' />
        <i className='size-[9px] rounded-full bg-[rgba(255,255,255,0.55)]' />
      </div>
      {src ? (
        <img src={src} alt={alt} loading='lazy' className='h-[calc(100%-34px)] w-full object-cover object-top' />
      ) : (
        <div className='absolute inset-x-0 top-[34px] bottom-0 flex flex-col items-start justify-center gap-4 bg-[linear-gradient(135deg,rgba(10,21,54,0.12),rgba(10,21,54,0.72))] p-7 text-[12px] text-white'>
          <span className='grid size-12 place-items-center rounded-[14px] border border-[rgba(255,255,255,0.65)] font-display text-[14px] font-bold leading-natural tracking-[0.08em]'>NS</span>
          <span className='max-w-[90%] font-display text-[clamp(18px,2.4vw,30px)] leading-[1.1] font-semibold'>{label}</span>
          <span className='flex w-full max-w-[220px] gap-[7px]'>
            <i className='block h-[5px] flex-1 rounded-full bg-[rgba(255,255,255,0.55)]' />
            <i className='block h-[5px] flex-1 rounded-full bg-[rgba(255,255,255,0.55)]' />
            <i className='block h-[5px] flex-[0.5] rounded-full bg-[rgba(255,255,255,0.25)]' />
          </span>
          <span className='font-mono text-[11px] leading-natural tracking-[0.08em] text-[rgba(255,255,255,0.7)] uppercase'>Illustrative preview · add approved project image</span>
        </div>
      )}
    </div>
  );
}
