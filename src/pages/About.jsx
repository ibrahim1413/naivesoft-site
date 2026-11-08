import CountUp from '../components/CountUp';
import Button from '../components/Button';
import CtaBand from '../components/CtaBand';
import Eyebrow from '../components/Eyebrow';
import Ser from '../components/Ser';
import CeoMessage from '../components/CeoMessage';
import usePageTitle from '../hooks/usePageTitle';
import { cn, wrap, sec, mut, card } from '../lib/ui';

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

const BIGNUM = 'block font-display text-[56px] leading-natural font-bold text-accent';

export default function About() {
  usePageTitle('About', 'Naive Soft is a 360° digital team based in Uttara, Dhaka.');
  return (
    <>
      <section className={cn(wrap, 'pt-30 pb-0 md:pb-22 md:pt-42')}>
        <Eyebrow>About us</Eyebrow>
        <p className='mt-7 max-w-[1050px] font-serif text-[40px] leading-[1.08] font-normal tracking-normal md:text-[72px]'>We turn ideas into <em className='text-accent'>impactful digital experiences</em> that help businesses stand out, connect and scale.</p>
      </section>

      <section className={cn(wrap, 'grid grid-cols-1 gap-8 pb-0 md:pb-26 md:grid-cols-[2fr_1fr]')}>
        <div className='relative flex min-h-[440px] flex-col items-center justify-end overflow-hidden rounded-card bg-[linear-gradient(145deg,#07132f,#2856a7)] text-white'>
          <img className='absolute inset-0 size-full object-cover object-top' src='https://naivesoft.net/wp-content/uploads/2025/07/Group-14-9.png' alt='Abdullah Al Faisal, Founder and CEO' />
          <div className='relative z-1 self-stretch bg-[rgba(5,12,31,0.8)] px-6 py-[18px]'>
            <b className='block'>Abdullah Al Faisal</b>
            <span className='mt-[3px] block text-[14px] text-[#a9b6d6]'>Founder &amp; CEO</span>
          </div>
        </div>
        <div className='grid gap-6'>
          <div className={cn(card, 'p-8')}><b className={BIGNUM}><CountUp to={9} /></b><span className={mut}>Years of delivery</span></div>
          <div className={cn(card, 'p-8')}><b className={BIGNUM}><CountUp to={250} /></b><span className={mut}>Companies served</span></div>
        </div>
      </section>

      <CeoMessage variant='about' />

      <section className={cn(sec, 'bg-ink text-white [--accent:var(--color-sky)] [--muted:#a9b6d6]')}>
        <div className={wrap}>
          <Eyebrow>Our journey</Eyebrow>
          <div className='mt-10 grid grid-cols-1 gap-8 md:grid-cols-4'>
            {TIMELINE.map(([year, text], i) => (
              <div key={i} className='border-t border-[#22356b] pt-7'><Ser className='text-[56px] text-sky'>{year}</Ser><p className={mut}>{text}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className={cn(sec, wrap)}>
        <Eyebrow>What we value</Eyebrow>
        <div className='mt-8'>
          {VALUES.map(([title, text], i) => (
            <div className='grid grid-cols-1 items-baseline gap-3 border-t border-hair py-8 md:grid-cols-[80px_1fr_1.4fr] md:gap-8' key={title}>
              <Ser className='text-[40px] text-accent'>0{i + 1}</Ser><h3>{title}</h3><p className={mut}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand title={<>Let’s build <Ser>together.</Ser></>}>
        <Button to='/contact'>Get a free quote</Button>
      </CtaBand>
    </>
  );
}
