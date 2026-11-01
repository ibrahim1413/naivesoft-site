import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='wrap footer-grid'>
        <div>
          <span className='nav-logo'><img src='/logo.png' alt='Naive Soft' /></span>
          <p>Digital solutions for brands that want to grow.</p>
        </div>
        <div>
          <b>Contact</b>
          <p>Rab Mansion, Ashkona, Dakshinkhan, Uttara, Dhaka 1230</p>
          <p>+88 01715163908</p>
          <p>info@naivesoft.net</p>
        </div>
        <div>
          <b>Explore</b>
          <p><Link to='/services'>Services</Link></p>
          <p><Link to='/'>Home</Link></p>
          <p><Link to='/portfolio'>Portfolio</Link></p>
          <p><Link to='/team'>Team</Link></p>
          <p><Link to='/feedback'>Feedback</Link></p>
          <p><Link to='/pricing'>Pricing</Link></p>
          <p><Link to='/about'>About</Link></p>
        </div>
      </div>
      <div className='wrap footer-base'>© 2018–{new Date().getFullYear()} Naive Soft. <span className='footer-legal'><Link to='/privacy'>Privacy Policy</Link><Link to='/terms'>Terms of Service</Link></span></div>
    </footer>
  );
}
