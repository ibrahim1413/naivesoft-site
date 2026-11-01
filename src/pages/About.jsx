import CountUp from '../components/CountUp';
import Reveal from '../components/Reveal';
import Button from '../components/Button';
import CeoMessage from '../components/CeoMessage';
import usePageTitle from '../hooks/usePageTitle';
import team from '../data/team';

const TIMELINE = [
  ['2018', 'Naive Soft begins its journey.'],
  ['Today', 'A multidisciplinary team working across websites, eCommerce, apps, design and digital marketing.'],
  ['Next', 'Building long-term digital partnerships through thoughtful design and dependable delivery.'],
];
const VALUES = [
  ['Quality', 'Detail-obsessed design and development on every project.'],
  ['Results', 'Work measured by growth for your business, not launch day.'],
  ['Long-term value', 'Support and strategy that keep delivering after go-live.'],
];
const initial = (name) => name.replace(/^(Md\.? |Mst\. )/, '')[0];

export default function About() {
  usePageTitle('About', 'Naive Soft is a 360° digital team based in Uttara, Dhaka.');
  return (
    <>
      <section className='wrap page-top'>
        <span className='eb'>About us</span>
        <p className='ser statement'>We turn ideas into <em>impactful digital experiences</em> that help businesses stand out, connect and scale.</p>
      </section>

      <section className='wrap about-grid'>
        <div className='about-ceo-visual'><img src='https://naivesoft.net/wp-content/uploads/2025/07/Group-14-9.png' alt='Abdullah Al Faisal, Founder and CEO' /><div><b>Abdullah Al Faisal</b><span>Founder &amp; CEO</span></div></div>
        <div className='stack'>
          <div className='card'><b className='bignum'><CountUp to={9} /></b><span className='mut'>Years of delivery</span></div>
          <div className='card'><b className='bignum'><CountUp to={250} /></b><span className='mut'>Companies served</span></div>
        </div>
      </section>

      <CeoMessage variant='about' />

      <section className='sec process'>
        <div className='wrap'>
          <span className='eb'>Our journey</span>
          <div className='g4' style={{ marginTop: 40 }}>
            {TIMELINE.map(([year, text], i) => (
              <div key={i} className='step'><span className='ser'>{year}</span><p className='mut'>{text}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className='sec wrap'>
        <span className='eb'>What we value</span>
        <div style={{ marginTop: 32 }}>
          {VALUES.map(([title, text], i) => (
            <div className='val-row' key={title}><span className='ser'>0{i + 1}</span><h3>{title}</h3><p className='mut'>{text}</p></div>
          ))}
        </div>
      </section>



      <section className='hero cta-band'>
        <div className='wrap center'>
          <h2>Let’s build <span className='ser'>together.</span></h2>
          <Button to='/contact'>Get a free quote</Button>
        </div>
      </section>
    </>
  );
}
