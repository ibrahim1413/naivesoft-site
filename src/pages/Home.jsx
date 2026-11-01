import Button from '../components/Button';
import CeoMessage from '../components/CeoMessage';
import SectionTitle from '../components/SectionTitle';
import MockFrame from '../components/MockFrame';
import Reveal from '../components/Reveal';
import Typewriter from '../components/Typewriter';
import CountUp from '../components/CountUp';
import Marquee from '../components/Marquee';
import usePageTitle from '../hooks/usePageTitle';
import services from '../data/services';
import projects from '../data/projects';
import clients from '../data/clients';
import feedback from '../data/feedback';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HERO_WORDS = ['websites', 'online stores', 'mobile apps', 'brands'];
const BIG_WORDS = ['Websites', 'Apps', 'Branding', 'Marketing', 'Video'];
const TECH = ['Flutter', 'Laravel', 'MySQL', 'WordPress', 'Android', 'iOS', 'Payment gateways', 'SEO'];
const STEPS = [
  ['01', 'Discover', 'Goals, audience and competitors mapped before design begins.'],
  ['02', 'Design', 'UI/UX and brand direction you review and approve.'],
  ['03', 'Build', 'Fast, secure development tested on every device.'],
  ['04', 'Grow', 'Launch support, SEO and campaigns with reporting.'],
];

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
      <section className='hero home-hero'>
        <div className='wrap hero-grid'>
          <div>
            <span className='eb'>Digital agency · Dhaka, Bangladesh</span>
            <h1>We craft digital experiences for brands that <span className='ser'>lead.</span></h1>
            <div className='hero-type'>We build <Typewriter words={HERO_WORDS} /></div>
            <p className='mut hero-sub'>Websites, eCommerce, apps, branding and marketing, delivered by one 360° team with nine years of craft behind it.</p>
            <div className='row-gap'>
              <Button to='/contact'>Start your project</Button>
              <Button to='/portfolio' variant='ghost'>View our work</Button>
            </div>
          </div>
          <div className='hero-vis'>
            <MockFrame label='Website design' height={380} className='hv-a' />
            <MockFrame label='Mobile app design' height={340} color='var(--logo-blue)' className='hv-b' />
            <div className='hv-chip'>Design · Build · Grow</div>
          </div>
        </div>
      </section>

      <section className='clients'>
        <span className='eb'>Trusted by growing brands</span>
        <Marquee items={clients} />
      </section>

      <section className='wrap stats g3'>
        <div><b><CountUp to={9} /></b><span className='mut'>Years of delivery</span></div>
        <div><b><CountUp to={250} /></b><span className='mut'>Companies served</span></div>
        <div><b><CountUp to={projects.length} /></b><span className='mut'>Projects listed in portfolio</span></div>
      </section>

      <section className='sec' style={{ paddingTop: 40 }}>
        <div className='wrap'>
          <Reveal>
            <SectionTitle eyebrow='What we do'>Everything your brand needs to <span className='ser'>win online.</span></SectionTitle>
          </Reveal>
          <div className='bento'>
            {services.map((s, i) => (
              <Reveal key={s.id} className={'bento-item span-' + s.span + (i < 2 ? ' bento-dark' + i : '')}>
                <span className='ser bento-num'>0{i + 1}</span>
                <div><h3>{s.title}</h3><p>{s.short}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CeoMessage variant='home' />

      <section className='sec hero'>
        <div className='wrap'>
          <SectionTitle eyebrow='Selected work'>Real projects. <span className='ser'>Measurable</span> outcomes.</SectionTitle>
          <div className='g2'>
            {featured.map((p) => (
              <Reveal key={p.id}>
                <MockFrame src={p.image} alt={p.name} label={p.name} color={p.color} height={420} />
                <div className='work-meta'><h3>{p.name}</h3><span>Project overview ↗</span></div>
                <div className='mut'>{p.kind}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className='sec domain-band'>
        <div className='wrap domain-grid'>
          <div>
            <span className='eb'>Find your online home</span>
            <h2>Have a domain <span className='ser'>in mind?</span></h2>
            <p className='mut'>Send us the domain name. Our team can check availability and share the relevant registration options. Availability is confirmed after provider lookup.</p>
          </div>
          <form className='domain-form' onSubmit={requestDomainCheck}>
            <label htmlFor='domain-name'>Your preferred domain</label>
            <div className='domain-input-row'><input id='domain-name' value={domain} onChange={(e) => setDomain(e.target.value)} placeholder='yourbrand.com' required aria-label='Preferred domain name' /><button className='btn btn-dark' type='submit'>Ask us to check ↗</button></div>
            <small className='mut'>This sends a domain enquiry; it does not claim live availability.</small>
          </form>
        </div>
      </section>

      <section className='big-mq'><Marquee items={BIG_WORDS} big reverse /></section>

      <section className='sec process'>
        <div className='wrap'>
          <SectionTitle eyebrow='How we work'>A clear process, <span className='ser'>idea to growth.</span></SectionTitle>
          <div className='g4'>
            {STEPS.map(([n, t, d]) => (
              <Reveal key={n} className='step'><span className='ser'>{n}</span><h3>{t}</h3><p className='mut'>{d}</p></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className='sec' style={{ paddingTop: 0 }}>
        <div className='wrap center'>
          <span className='eb'>Built with</span>
          <div className='chips'>{TECH.map((t) => <span key={t}>{t}</span>)}</div>
        </div>
      </section>



      <section className='wrap proof'>
        <div className='card quote'>
          <p className='ser'>“A true 360° solution provider, from branding to website to marketing, with exceptional skill and dedication.”</p>
          <b>MD. Rabbiul Hasan Avi</b><span className='mut'>Managing Director and CEO, In Art Studio</span>
        </div>
        <div className='price-teaser'>
          <span className='eb'>Transparent pricing</span>
          <h3>From ৳30,000</h3>
          <p>Clear plans for websites, eCommerce and monthly marketing.</p>
          <Button to='/pricing'>See pricing</Button>
        </div>
      </section>

      <section className='hero cta-band'>
        <div className='wrap center'>
          <h2>Ready to build something that <span className='ser'>grows?</span></h2>
          <p className='mut'>Tell us about your project. We reply within one working day.</p>
          <Button to='/contact'>Get a free quote</Button>
        </div>
      </section>
    </>
  );
}
