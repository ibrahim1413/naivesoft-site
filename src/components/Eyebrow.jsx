import { cn } from '../lib/ui';

export default function Eyebrow({ className, children }) {
  return (
    <span
      className={cn(
        'text-[13px] font-semibold uppercase tracking-[0.16em] text-accent before:mr-3 before:inline-block before:h-px before:w-7 before:bg-current before:align-middle',
        className
      )}
    >
      {children}
    </span>
  );
}
