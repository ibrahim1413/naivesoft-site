import { Link } from 'react-router-dom';
import { wrap, logoChip, cn } from '../lib/ui';

const LINK = 'hover:text-white';

export default function Footer() {
  return (
    <footer className='bg-[#070f29] pt-16 pb-9 text-[#a9b6d6]'>
      <div className={cn(wrap, 'grid grid-cols-1 gap-8 text-[15px] leading-[1.8] md:grid-cols-3')}>
        <div>
          <span className={cn(logoChip, 'mb-3')}><img src='/logo.png' alt='Naive Soft' className='h-[34px] w-auto md:h-11' /></span>
          <p>Digital solutions for brands that want to grow.</p>
        </div>
        <div>
          <b className='text-white'>Contact</b>
          <p>Rab Mansion, Ashkona, Dakshinkhan, Uttara, Dhaka 1230</p>
          <p>+88 01715163908</p>
          <p>info@naivesoft.net</p>
        </div>
        <div>
          <b className='text-white'>Explore</b>
          <p><Link to='/services' className={LINK}>Services</Link></p>
          <p><Link to='/' className={LINK}>Home</Link></p>
          <p><Link to='/portfolio' className={LINK}>Portfolio</Link></p>
          <p><Link to='/team' className={LINK}>Team</Link></p>
          <p><Link to='/feedback' className={LINK}>Feedback</Link></p>
          <p><Link to='/pricing' className={LINK}>Pricing</Link></p>
          <p><Link to='/about' className={LINK}>About</Link></p>
        </div>
      </div>
      <div className={cn(wrap, 'mt-8 text-[13px]')}>
        © 2018–{new Date().getFullYear()} Naive Soft.{' '}
        <span className='ml-3 inline-flex gap-4'>
          <Link to='/privacy' className='underline underline-offset-[3px] hover:text-white'>Privacy Policy</Link>
          <Link to='/terms' className='underline underline-offset-[3px] hover:text-white'>Terms of Service</Link>
        </span>
      </div>
    </footer>
  );
}
