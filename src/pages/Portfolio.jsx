import { useDispatch, useSelector } from 'react-redux';
import { setFilter, selectVisible } from '../features/portfolio/portfolioSlice';
import MockFrame from '../components/MockFrame';
import Reveal from '../components/Reveal';
import Button from '../components/Button';
import CtaBand from '../components/CtaBand';
import Eyebrow from '../components/Eyebrow';
import Hero from '../components/Hero';
import Ser from '../components/Ser';
import usePageTitle from '../hooks/usePageTitle';
import { cn, wrap, mut } from '../lib/ui';

const FILTERS = ['All', 'Websites', 'eCommerce', 'Apps', 'Branding'];
const HEIGHTS = [360, 470, 300, 430, 340, 480, 380, 320];

const PILL = 'cursor-pointer rounded-full border px-5 py-2.5 font-body text-[14px] leading-natural font-semibold transition-all duration-300';

export default function Portfolio() {
  usePageTitle('Portfolio', 'Selected websites, stores and apps built by Naive Soft.');
  const dispatch = useDispatch();
  const active = useSelector((state) => state.portfolio.activeFilter);
  const items = useSelector(selectVisible);

  return (
    <>
      <Hero className='pt-30 pb-14 md:pt-40'>
        <div className={cn(wrap, 'flex flex-wrap items-end justify-between gap-8')}>
          <div>
            <Eyebrow>Index · {items.length} projects</Eyebrow>
            <h1 className='mt-5'>Selected <Ser>work</Ser></h1>
          </div>
          <div className='flex flex-wrap gap-2.5'>
            {FILTERS.map((f) => (
              <button
                key={f}
                className={cn(PILL, f === active ? 'border-sky bg-sky text-ink' : 'border-[#22356b] bg-transparent text-[#a9b6d6] hover:border-sky hover:text-white')}
                onClick={() => dispatch(setFilter(f))}
              >{f}</button>
            ))}
          </div>
        </div>
      </Hero>

      <section className='bg-ink pb-20 text-white [--muted:#a9b6d6]'>
        <div className={wrap}>
          <div className='grid grid-cols-1 items-end gap-7 pt-7 pb-14 md:grid-cols-[1.4fr_1fr] md:gap-12 md:pt-12'>
            <div>
              <Eyebrow>Selected project</Eyebrow>
              <h2 className='my-3.5 text-[clamp(32px,4vw,52px)]'>Work shaped around <Ser>real business needs.</Ser></h2>
              <p className={mut}>Project screenshots and verified case-study details can be added as each client-approved asset is ready.</p>
            </div>
            <div className='border-l border-[#22356b] py-3 pl-[18px] text-[#a9b6d6] md:pl-7'>
              <Ser className='text-[36px] text-sky'>01 — 08</Ser>
              <p>Websites, eCommerce and mobile app work currently listed in this portfolio.</p>
            </div>
          </div>
          <div className='columns-1 gap-x-8 md:columns-3'>
            {items.map((p, i) => (
              <Reveal key={p.id} className='mb-10 break-inside-avoid'>
                <MockFrame src={p.image} alt={p.name} label={p.name} color={p.color} height={HEIGHTS[i % HEIGHTS.length]} />
                <div className='mt-5 flex items-baseline justify-between'><b className='text-[18px]'>{p.name}</b><span className='font-semibold text-sky'>↗</span></div>
                <div className={mut}>{p.kind}</div>
                <p className='mt-2.5 leading-[1.6] text-[#a9b6d6]'>{p.description}</p>
              </Reveal>
            ))}
          </div>
          {items.length === 0 && (
            <div className='max-w-[720px] pt-16 pb-20'>
              <Eyebrow>Branding & design</Eyebrow>
              <h2 className='my-4 text-[clamp(32px,4vw,50px)]'>Creative work, <Ser>presented with purpose.</Ser></h2>
              <p className={mut}>Branding projects will appear here once approved portfolio artwork is added. Contact us to discuss a logo, visual identity or campaign design.</p>
              <Button to='/contact' variant='dark' className='mt-3'>Discuss a design project</Button>
            </div>
          )}
        </div>
      </section>

      <CtaBand title={<>Have a project <Ser>in mind?</Ser></>}>
        <Button to='/contact'>Get a free quote</Button>
      </CtaBand>
    </>
  );
}
