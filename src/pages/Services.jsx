import Button from '../components/Button';
import Eyebrow from '../components/Eyebrow';
import Hero from '../components/Hero';
import Ser from '../components/Ser';
import usePageTitle from '../hooks/usePageTitle';
import services from '../data/services';
import { cn, wrap, mut } from '../lib/ui';

export default function Services() {
  usePageTitle('Services', 'eCommerce, websites, apps, marketing, video and branding from one team.');
  return (
    <>
      <section className={cn(wrap, 'pt-30 pb-0 md:pb-22 md:pt-42')}>
        <Eyebrow>Services</Eyebrow>
        <h1 className='mt-6 mb-8 max-w-[1000px]'>Six disciplines. <Ser>One team.</Ser></h1>
        <p className={mut + ' max-w-[560px] text-[20px]'}>Pick a single service or combine them into a complete growth plan.</p>
      </section>

      <section className={cn(wrap, 'pb-0 md:pb-30')}>
        {services.map((s, i) => (
          <div
            key={s.id}
            className='grid grid-cols-1 items-center gap-3 border-t border-hair py-11 transition-[background-color,padding-left] duration-400 ease-soft last:border-b hover:bg-surface hover:pl-7 md:grid-cols-[140px_1.2fr_1fr_40px] md:gap-8'
          >
            <Ser className='text-[44px] leading-none text-accent md:text-[72px]'>0{i + 1}</Ser>
            <div><h3>{s.title}</h3><p className={mut}>{s.short}</p></div>
            <div className='flex flex-wrap gap-2'>
              {s.points.map((p) => <span key={p} className='rounded-full border border-hair bg-surface px-4 py-2 text-[14px]'>{p}</span>)}
            </div>
            <span className='text-[28px] text-accent'>→</span>
          </div>
        ))}
      </section>

      <Hero className='py-28'>
        <div className={cn(wrap, 'grid grid-cols-1 items-center gap-8 text-left md:grid-cols-2')}>
          <h2 className='m-0 text-[38px] md:text-[52px]'>Not sure where to <Ser>start?</Ser></h2>
          <div className='flex flex-wrap gap-4'>
            <Button to='/contact'>Book a free call</Button>
            <Button to='/pricing' variant='ghost'>See pricing</Button>
          </div>
        </div>
      </Hero>
    </>
  );
}
