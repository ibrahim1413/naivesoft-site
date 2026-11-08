import { useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu, closeMenu } from '../features/ui/uiSlice';
import useScrolled from '../hooks/useScrolled';
import ThemeToggle from './ThemeToggle';
import Button from './Button';
import { cn, logoChip } from '../lib/ui';

const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/team', label: 'Team' },
  { to: '/feedback', label: 'Feedback' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];
const HERO_PAGES = ['/', '/portfolio', '/contact'];

const LINK_BASE =
  "relative transition-colors duration-300 after:absolute after:-bottom-2 after:left-0 after:h-px after:bg-current after:transition-[width] after:duration-350 after:ease-soft";

export default function Navbar() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const menuOpen = useSelector((state) => state.ui.menuOpen);
  const onHero = HERO_PAGES.includes(pathname);
  const scrolled = useScrolled(40) || pathname === '/contact';

  useEffect(() => {
    dispatch(closeMenu());
  }, [pathname, dispatch]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-60 flex h-20 items-center transition-[background-color,border-color] duration-400',
        onHero
          ? 'text-[#a9b6d6]'
          : 'border-b border-hair bg-[color-mix(in_srgb,var(--bg)_92%,transparent)] text-fg shadow-[0_14px_34px_-22px_rgba(10,21,54,0.3)] backdrop-blur-[18px]',
        onHero && scrolled && 'border-b border-white/10 bg-[rgba(10,21,54,0.9)] backdrop-blur-[18px] backdrop-saturate-150'
      )}
    >
      <div className='mx-auto flex w-full max-w-[1200px] items-center justify-between px-5 md:px-8'>
        <Link to='/' className={logoChip}>
          <img
            src='/logo.png'
            alt='Naive Soft'
            className={cn('h-[34px] w-auto transition-[height] duration-400 ease-soft', !scrolled && 'md:h-11')}
          />
        </Link>
        <nav className='hidden gap-5 text-[14px] font-medium whitespace-nowrap md:flex md:max-lg:gap-3 md:max-lg:text-[12px]'>
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                cn(LINK_BASE, isActive ? cn('after:w-full', onHero ? 'text-sky' : 'text-accent') : 'after:w-0 hover:after:w-full')
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className='flex items-center gap-4 md:max-lg:gap-2.5'>
          <ThemeToggle onHero={onHero} />
          <Button to='/contact' small className='max-md:hidden'>Get a quote</Button>
          <button
            className='relative block size-11 cursor-pointer border-0 bg-transparent text-inherit md:hidden'
            onClick={() => dispatch(toggleMenu())}
            aria-label='Menu'
          >
            <span className='absolute top-4 right-2.5 left-2.5 h-0.5 rounded-[2px] bg-current' />
            <span className='absolute top-[26px] right-2.5 left-2.5 h-0.5 rounded-[2px] bg-current' />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className='absolute inset-x-0 top-20 flex flex-col gap-5 bg-ink px-8 pt-6 pb-8 text-[20px] text-white'>
          {LINKS.map((l) => (<Link key={l.to} to={l.to}>{l.label}</Link>))}
          <Button to='/contact'>Get a quote</Button>
        </div>
      )}
    </header>
  );
}
