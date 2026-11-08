import { cn } from '../lib/ui';


export default function Ser({ as: Tag = 'span', className, children }) {
  return (
    <Tag
      className={cn(
        'font-serif font-normal italic tracking-normal',
        'in-data-hero:animate-shimmer in-data-hero:bg-[linear-gradient(90deg,var(--color-sky-soft),#fff,var(--color-sky-soft))] in-data-hero:bg-size-[200%_100%] in-data-hero:bg-clip-text in-data-hero:text-transparent',
        className
      )}
    >
      {children}
    </Tag>
  );
}
