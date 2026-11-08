import { useEffect, useRef, useState } from 'react';
import { cn } from '../lib/ui';

export default function Reveal({ children, className }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShown(true);
        io.disconnect();
      }
    }, { threshold: 0.15 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={cn(
        'transition-[opacity,filter,scale] duration-900 ease-soft motion-reduce:scale-none motion-reduce:opacity-100 motion-reduce:filter-none',
        shown ? 'scale-none opacity-100 filter-none' : 'scale-[0.94] opacity-0 blur-lg',
        className
      )}
    >
      {children}
    </div>
  );
}
