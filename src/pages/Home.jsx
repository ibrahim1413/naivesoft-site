import Button from '../components/Button';
import CeoMessage from '../components/CeoMessage';
import SectionTitle from '../components/SectionTitle';
import MockFrame from '../components/MockFrame';
import Reveal from '../components/Reveal';
import Typewriter from '../components/Typewriter';
import Eyebrow from '../components/Eyebrow';
import Ser from '../components/Ser';
import Hero from '../components/Hero';
import CtaBand from '../components/CtaBand';
import CountUp from '../components/CountUp';
import Marquee from '../components/Marquee';
import usePageTitle from '../hooks/usePageTitle';
import services from '../data/services';
import projects from '../data/projects';
import clients from '../data/clients';
import feedback from '../data/feedback';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cn, wrap, sec, mut, card } from '../lib/ui';

const HERO_WORDS = ['websites', 'online stores', 'mobile apps', 'brands'];
const BIG_WORDS = ['Websites', 'Apps', 'Branding', 'Marketing', 'Video'];
const TECH = ['Flutter', 'Laravel', 'MySQL', 'WordPress', 'Android', 'iOS', 'Payment gateways', 'SEO'];
const SPAN = { 1: '', 2: 'md:col-span-2' };
const STEPS = [
  ['01', 'Discover', 'Goals, audience and competitors mapped before design begins.'],
  ['02', 'Design', 'UI/UX and brand direction you review and approve.'],
  ['03', 'Build', 'Fast, secure development tested on every device.'],
  ['04', 'Grow', 'Launch support, SEO and campaigns with reporting.'],
];

const STAT = 'block font-display text-[56px] leading-natural font-bold text-accent';

export default function Home() {
  usePageTitle('Digital Agency in Dhaka', 'Websites, eCommerce, apps, branding and marketing by one 360° team.');
  const featured = projects.filter((p) => p.id === 1 || p.id === 6);
  const [domain, setDomain] = useState('');
  const navigate = useNavigate();
  const requestDomainCheck = (e) => {
    e.preventDefault();
    const value = domain.trim().replace(/^https?:\/\//, '').replace(/\/$/, '');
    if (!value) return;
    navigate('/contact', { state: { message: `Please check domain availability and pricing for: ${value}` } });
  };

  return (
    <>
      <Hero className='pt-30 pb-30 md:pt-40'>
        <div className={cn(wrap, 'grid grid-cols-1 items-center gap-14 md:grid-cols-[1.1fr_1fr]')}>
          <div>
            <Eyebrow>Digital agency · Dhaka, Bangladesh</Eyebrow>
            <h1 className='my-7'>We craft digital experiences for brands that <Ser>lead.</Ser></h1>
            <div className='mb-7 font-mono text-[20px] leading-natural font-bold whitespace-nowrap text-sky-soft md:text-[28px]'>We build <Typewriter words={HERO_WORDS} /></div>
            <p className={mut + ' mb-11 max-w-[520px] text-[20px]'}>Websites, eCommerce, apps, branding and marketing, delivered by one 360° team with nine years of craft behind it.</p>
            <div className='flex flex-wrap gap-4'>
              <Button to='/contact'>Start your project</Button>
              <Button to='/portfolio' variant='ghost'>View our work</Button>
            </div>
          </div>
          <div className='relative hidden h-[520px] md:block'>
            <MockFrame label='Website design' height={380} className='absolute top-[30px] left-0 w-[86%] rounded-card' />
            <MockFrame label='Mobile app design' height={340} color='var(--color-logo-blue)' className='absolute right-0 bottom-0 w-[180px] rounded-[34px] border-[6px] border-ink' />
            <div className='absolute bottom-[30px] left-6 animate-float rounded-2xl bg-white px-[22px] py-4 font-semibold text-ink shadow-[0_20px_40px_-12px_rgba(0,0,0,0.4)]'>Design · Build · Grow</div>
          </div>
        </div>
      </Hero>

      <section className='border-b border-hair bg-surface py-14'>
        <Eyebrow className='mb-8 block text-center [--accent:var(--muted)]'>Trusted by growing brands</Eyebrow>
        <Marquee items={clients} />
      </section>

      <section className={cn(wrap, 'grid grid-cols-1 gap-6 py-0 md:grid-cols-3 md:py-18')}>
        <div><b className={STAT}><CountUp to={9} /></b><span className={mut}>Years of delivery</span></div>
        <div><b className={STAT}><CountUp to={250} /></b><span className={mut}>Companies served</span></div>
        <div><b className={STAT}><CountUp to={projects.length} /></b><span className={mut}>Projects listed in portfolio</span></div>
      </section>

      <section className='pt-10 pb-18 md:pb-30'>
        <div className={wrap}>
          <Reveal>
            <SectionTitle eyebrow='What we do'>Everything your brand needs to <Ser>win online.</Ser></SectionTitle>
          </Reveal>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-4'>
            {services.map((s, i) => (
              <Reveal
                key={s.id}
                className={cn(
                  'flex min-h-[260px] flex-col justify-between rounded-[28px] border border-hair p-9 shadow-soft',
                  SPAN[s.span],
                  i === 0 && 'bg-ink text-white [--accent:var(--color-sky-soft)] [--muted:#bfd6f5]',
                  i === 1 && 'bg-royal text-white [--accent:var(--color-sky-soft)] [--muted:#bfd6f5]',
                  i > 1 && 'bg-surface'
                )}
              >
                <Ser className='text-[40px] text-accent'>0{i + 1}</Ser>
                <div><h3 className='mb-2.5'>{s.title}</h3><p className='leading-[1.6] text-muted'>{s.short}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CeoMessage variant='home' />

      <Hero className={sec}>
        <div className={wrap}>
          <SectionTitle eyebrow='Selected work'>Real projects. <Ser>Measurable</Ser> outcomes.</SectionTitle>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
            {featured.map((p) => (
              <Reveal key={p.id}>
                <MockFrame src={p.image} alt={p.name} label={p.name} color={p.color} height={420} />
                <div className='mt-5 flex items-baseline justify-between'><h3>{p.name}</h3><span className='font-semibold text-sky'>Project overview ↗</span></div>
                <div className={mut}>{p.kind}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </Hero>

      <section className={cn(sec, 'border-y border-hair bg-surface')}>
        <div className={cn(wrap, 'grid grid-cols-1 items-center gap-7 md:grid-cols-[1fr_1.1fr] md:gap-14')}>
          <div>
            <Eyebrow>Find your online home</Eyebrow>
            <h2 className='my-3.5 text-[clamp(34px,4vw,54px)]'>Have a domain <Ser>in mind?</Ser></h2>
            <p className={mut}>Send us the domain name. Our team can check availability and share the relevant registration options. Availability is confirmed after provider lookup.</p>
          </div>
          <form className='rounded-card border border-hair bg-page p-7 shadow-soft' onSubmit={requestDomainCheck}>
            <label htmlFor='domain-name' className='mb-3 block text-[13px] font-bold tracking-[0.1em] text-muted uppercase'>Your preferred domain</label>
            <div className='flex flex-col gap-2.5 md:flex-row'>
              <input
                id='domain-name'
                className='min-w-0 flex-1 rounded-xl border border-hair bg-surface px-4 py-3.5 font-body text-[16px] leading-natural text-fg placeholder:text-[#757575]'
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                placeholder='yourbrand.com'
                required
                aria-label='Preferred domain name'
              />
              <Button variant='dark' type='submit'>Ask us to check ↗</Button>
            </div>
            <small className={mut + ' mt-3 block'}>This sends a domain enquiry; it does not claim live availability.</small>
          </form>
        </div>
      </section>

      <section className='overflow-hidden py-14'><Marquee items={BIG_WORDS} big reverse /></section>

      <section className={cn(sec, 'bg-ink text-white [--accent:var(--color-sky)] [--muted:#a9b6d6]')}>
        <div className={wrap}>
          <SectionTitle eyebrow='How we work'>A clear process, <Ser>idea to growth.</Ser></SectionTitle>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-4'>
            {STEPS.map(([n, t, d]) => (
              <Reveal key={n} className='border-t border-[#22356b] pt-7'>
                <Ser className='text-[56px] text-sky'>{n}</Ser>
                <h3 className='my-2'>{t}</h3>
                <p className={mut}>{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className='pt-0 pb-18 md:pb-30'>
        <div className={cn(wrap, 'text-center')}>
          <Eyebrow>Built with</Eyebrow>
          <div className='mt-8 flex flex-wrap justify-center gap-3.5'>
            {TECH.map((t) => <span key={t} className='rounded-full border border-hair bg-surface px-[22px] py-3 font-semibold'>{t}</span>)}
          </div>
        </div>
      </section>

      <section className={cn(wrap, 'grid grid-cols-1 items-center gap-14 pb-0 md:grid-cols-[1.3fr_1fr] md:pb-30')}>
        <div className={cn(card, 'p-8 md:p-16')}>
          <Ser as='p' className='mb-7 text-[30px] leading-[1.2] md:text-[44px]'>“A true 360° solution provider, from branding to website to marketing, with exceptional skill and dedication.”</Ser>
          <b className='block'>MD. Rabbiul Hasan Avi</b><span className={mut + ' block'}>Managing Director and CEO, In Art Studio</span>
        </div>
        <div className='rounded-card bg-ink p-9 text-white [--accent:var(--color-sky)]'>
          <Eyebrow>Transparent pricing</Eyebrow>
          <h3 className='mt-3.5 mb-1.5 text-[48px]'>From ৳30,000</h3>
          <p className='mb-6 text-[#a9b6d6]'>Clear plans for websites, eCommerce and monthly marketing.</p>
          <Button to='/pricing'>See pricing</Button>
        </div>
      </section>

      <CtaBand title={<>Ready to build something that <Ser>grows?</Ser></>} text='Tell us about your project. We reply within one working day.'>
        <Button to='/contact'>Get a free quote</Button>
      </CtaBand>
    </>
  );
}
