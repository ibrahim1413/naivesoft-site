import { useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu, closeMenu } from '../features/ui/uiSlice';
import useScrolled from '../hooks/useScrolled';
import ThemeToggle from './ThemeToggle';
import Button from './Button';

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

export default function Navbar() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const menuOpen = useSelector((state) => state.ui.menuOpen);
  const onHero = HERO_PAGES.includes(pathname);
  const scrolled = useScrolled(40) || pathname === '/contact';

  useEffect(() => {
    dispatch(closeMenu());
  }, [pathname, dispatch]);

  const cls = 'nav ' + (onHero ? 'nav--hero' : 'nav--light') + (scrolled ? ' scrolled' : '');

  return (
    <header className={cls}>
      <div className='wrap'>
        <Link to='/' className='nav-logo'>
          <img src='/logo.png' alt='Naive Soft' />
        </Link>
        <nav className='nav-links'>
          {LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={({ isActive }) => (isActive ? 'active' : '')}>
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className='nav-right'>
          <ThemeToggle />
          <Button to='/contact' small>Get a quote</Button>
          <button className='burger' onClick={() => dispatch(toggleMenu())} aria-label='Menu'>
            <span /><span />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className='mobile-menu'>
          {LINKS.map((l) => (<Link key={l.to} to={l.to}>{l.label}</Link>))}
          <Button to='/contact'>Get a quote</Button>
        </div>
      )}
    </header>
  );
}
