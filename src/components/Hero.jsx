import { cn } from '../lib/ui';


export default function Hero({ as: Tag = 'section', className, children }) {
  return (
    <Tag
      data-hero
      className={cn(
        'relative overflow-clip bg-ink text-white [--accent:var(--color-sky)] [--muted:#a9b6d6]',
        'bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-size-[64px_64px]',
        '*:relative *:z-1',
        'before:pointer-events-none before:absolute before:-top-[200px] before:-right-[140px] before:z-0 before:size-[560px] before:animate-orb before:rounded-full before:bg-[radial-gradient(circle,rgba(91,167,227,0.38),transparent_65%)]',
        className
      )}
    >
      {children}
    </Tag>
  );
}
