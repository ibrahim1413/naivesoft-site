import { Link } from 'react-router-dom';
import { cn } from '../lib/ui';

const BASE =
  'relative inline-block cursor-pointer overflow-hidden rounded-full border font-body font-semibold leading-natural tracking-[0.01em] ' +
  'transition-[transform,box-shadow] duration-350 ease-soft hover:-translate-y-[3px] hover:shadow-[0_16px_32px_-12px_rgba(91,167,227,0.65)] ' +
  'disabled:cursor-not-allowed disabled:opacity-60 ' +
  
  'before:absolute before:inset-0 before:-translate-x-[120%] before:bg-[linear-gradient(110deg,transparent_30%,rgba(255,255,255,0.55)_50%,transparent_70%)] before:transition-transform before:duration-800 before:ease-soft hover:before:translate-x-[120%]';

const VARIANTS = {
  primary: 'border-transparent bg-sky text-ink',
  dark: 'border-transparent bg-ink text-white dark:bg-sky dark:text-ink',
  outline: 'border-current text-fg',
  ghost: 'border-white/50 text-white',
};

export default function Button({ to, href, variant = 'primary', small = false, className, children, ...rest }) {
  const cls = cn(BASE, VARIANTS[variant], small ? 'px-[22px] py-3 text-[15px]' : 'px-7 py-4 text-[16px]', className);
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>;
  if (href) return <a href={href} className={cls} {...rest}>{children}</a>;
  return <button className={cls} {...rest}>{children}</button>;
}
