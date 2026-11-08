import Reveal from '../components/Reveal';
import Button from '../components/Button';
import CtaBand from '../components/CtaBand';
import Eyebrow from '../components/Eyebrow';
import SectionTitle from '../components/SectionTitle';
import Ser from '../components/Ser';
import usePageTitle from '../hooks/usePageTitle';
import feedback from '../data/feedback';
import { cardSurface, cn, mut, wrap } from '../lib/ui';

export default function Feedback() {
  usePageTitle('Client Feedback', 'Client feedback and testimonials for Naive Soft.');
  return (
    <>
      <section className={cn(wrap, 'pt-30 pb-0 md:pb-22 md:pt-42')}>
        <Eyebrow>Client feedback</Eyebrow>
        <h1 className='mt-6 mb-8 max-w-[1000px]'>Trust is built <Ser>through the work.</Ser></h1>
        <p className={mut + ' max-w-[560px] text-[20px]'}>Hear from seven clients about their experience working with Naive Soft.</p>
      </section>
      <section className={cn(wrap, 'pb-28')}>
        <SectionTitle eyebrow='Client stories'>Feedback that <Ser>matters.</Ser></SectionTitle>
        <div className='grid grid-cols-1 items-stretch gap-6 md:grid-cols-2'>
          {feedback.map((item) => (
            <Reveal className={cn(cardSurface, 'p-[clamp(24px,3vw,38px)] hover:shadow-[0_40px_70px_-28px_rgba(10,21,54,0.4)]')} key={item.name}>
              <Ser className='block text-[60px] leading-[0.8] text-accent'>“</Ser>
              <blockquote className='mt-3 mb-[26px] text-[17px] leading-[1.75] text-fg'>{item.quote}</blockquote>
              <div className='flex items-center gap-4'>
                <img className='size-[58px] shrink-0 rounded-full border-2 border-hair object-cover object-top' src={item.photo} alt={item.name} loading='lazy' />
                <div><b className='block text-[15px]'>{item.name}</b><span className='mt-1 block text-[13px] leading-[1.5] text-muted'>{item.role}</span></div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand title={<>Ready to start your <Ser>own story?</Ser></>} text='Tell us what you’re building and let’s discuss how we can help.'>
        <Button to='/contact'>Start a project</Button>
      </CtaBand>
    </>
  );
}
