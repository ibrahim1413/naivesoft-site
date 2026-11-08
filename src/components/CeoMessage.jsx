import { useState } from 'react';
import { ceoMessage as m } from '../data/ceoMessage';
import Button from './Button';
import Eyebrow from './Eyebrow';
import Ser from './Ser';
import { cn, wrap, mut } from '../lib/ui';

const initials = m.name.split(' ')[0][0] + m.name.split(' ').slice(-1)[0][0];

const H2 = 'mt-4 mb-5 text-[clamp(34px,4vw,54px)] leading-[1.1]';
const P = 'mb-5 text-[18px] leading-[1.8] text-muted';

export default function CeoMessage({ variant = 'home' }) {
  const [failed, setFailed] = useState(false);
  const isHome = variant === 'home';
  return (
    <section className={isHome ? 'bg-surface py-18 md:py-30' : 'pt-10 pb-18 md:pb-30'}>
      <div
        className={cn(
          wrap,
          'grid grid-cols-1 items-center gap-[clamp(36px,8vw,100px)]',
          isHome && 'md:grid-cols-[0.8fr_1.2fr]'
        )}
      >
        {isHome && (
          <figure className='relative m-0 flex h-[360px] flex-col items-center justify-end overflow-hidden rounded-[30px] bg-[linear-gradient(145deg,#07132f,#2856a7)] text-white md:h-[460px]'>
            {failed
              ? <Ser className='absolute inset-0 flex items-center justify-center text-[120px] text-sky-soft'>{initials}</Ser>
              : <img src={m.photo} alt={m.name + ', ' + m.role} onError={() => setFailed(true)} className='absolute inset-0 size-full object-cover object-top' />}
            <figcaption className='relative z-1 self-stretch bg-[rgba(5,12,31,0.82)] px-6 py-4'>
              <b className='block'>{m.name}</b>
              <span className={'block mt-[3px] text-[14px] text-[#a9b6d6]'}>{m.role}</span>
            </figcaption>
          </figure>
        )}

        <div className={cn(!isHome && 'max-w-[860px]')}>
          {m.approved ? (
            <>
              <Eyebrow>A message from our Founder &amp; CEO</Eyebrow>
              <Ser as='blockquote' className='mt-[22px] mb-7 border-l-[3px] border-accent pl-7 text-[clamp(30px,3.6vw,46px)] leading-[1.2]'>
                “{m.pullQuote}”
              </Ser>
              {m.paragraphs.map((p) => <p className={P} key={p}>{p}</p>)}
              <div className='my-7'>
                <b className='block font-serif text-[28px] leading-natural font-normal italic'>{m.name}</b>
                <span className={mut + ' block text-[14px]'}>{m.role}</span>
              </div>
              {isHome && <Button to='/about' variant='ghost'>More about us</Button>}
            </>
          ) : (
            <>
              <Eyebrow>Meet our Founder &amp; CEO</Eyebrow>
              <h2 className={H2}>{m.name}</h2>
              {m.intro.map((p) => <p className={P} key={p}>{p}</p>)}
              <div className='my-7'>
                <span className={mut + ' block text-[14px]'}>{m.role}</span>
              </div>
              {isHome && <Button to='/about' variant='ghost'>More about us</Button>}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
