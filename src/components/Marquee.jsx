import { cn } from '../lib/ui';

export default function Marquee({ items, big = false, reverse = false }) {
  const list = [...items, ...items];
  return (
    <div className='overflow-hidden [-webkit-mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)] [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]'>
      <div
        className={cn(
          'flex w-max items-center hover:[animation-play-state:paused]',
          big ? 'animate-marquee-slow gap-14' : 'animate-marquee gap-18',
          reverse && '[animation-direction:reverse]'
        )}
      >
        {list.map((item, i) =>
          typeof item === 'string' ? (
            <span
              key={i}
              className={cn(
                'font-display font-bold leading-natural whitespace-nowrap',
                big
                  ? 'text-[72px] text-transparent [-webkit-text-stroke:2px_var(--color-royal)] md:text-[120px] dark:[-webkit-text-stroke-color:var(--color-sky)]'
                  : 'text-[24px] text-muted'
              )}
            >
              {item}
            </span>
          ) : (
            <img key={i} src={item.logo} alt={item.name} className='h-9 w-auto opacity-70 grayscale' />
          )
        )}
      </div>
    </div>
  );
}
