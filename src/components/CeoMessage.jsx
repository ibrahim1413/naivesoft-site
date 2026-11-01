import { useState } from 'react';
import { ceoMessage as m } from '../data/ceoMessage';
import Button from './Button';


const initials = m.name.split(' ')[0][0] + m.name.split(' ').slice(-1)[0][0];


export default function CeoMessage({ variant = 'home' }) {
  const [failed, setFailed] = useState(false);
  const showPhoto = variant === 'home';
  return (
    <section className={'sec ceo-msg ceo-' + variant}>
      <div className='wrap ceo-grid'>
        {showPhoto && (
          <figure className='ceo-photo'>
            {failed
              ? <span className='ceo-initials ser'>{initials}</span>
              : <img src={m.photo} alt={m.name + ', ' + m.role} onError={() => setFailed(true)} />}
            <figcaption><b>{m.name}</b><span>{m.role}</span></figcaption>
          </figure>
        )}

        {m.approved ? (
          <div className='ceo-body'>
            <span className='eb'>A message from our Founder &amp; CEO</span>
            <blockquote className='ceo-pull ser'>“{m.pullQuote}”</blockquote>
            {m.paragraphs.map((p) => <p className='mut' key={p}>{p}</p>)}
            <div className='ceo-sign'><b>{m.name}</b><span className='mut'>{m.role}</span></div>
            {variant === 'home' && <Button to='/about' variant='ghost'>More about us</Button>}
          </div>
        ) : (
          <div className='ceo-body'>
            <span className='eb'>Meet our Founder &amp; CEO</span>
            <h2>{m.name}</h2>
            {m.intro.map((p) => <p className='mut' key={p}>{p}</p>)}
            <div className='ceo-sign'><span className='mut'>{m.role}</span></div>
            {variant === 'home' && <Button to='/about' variant='ghost'>More about us</Button>}
          </div>
        )}
      </div>
    </section>
  );
}
