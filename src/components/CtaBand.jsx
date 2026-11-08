import Hero from './Hero';
import { wrap, mut } from '../lib/ui';

export default function CtaBand({ title, text, children }) {
  return (
    <Hero className='py-28'>
      <div className={wrap + ' text-center'}>
        <h2 className='mx-auto mb-7 max-w-[900px] text-[38px] md:text-[64px]'>{title}</h2>
        {text && <p className={mut + ' mb-10 text-[20px]'}>{text}</p>}
        {children}
      </div>
    </Hero>
  );
}
