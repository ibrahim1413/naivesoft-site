import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setField, submitQuote, resetQuote } from '../features/quote/quoteSlice';
import Typewriter from '../components/Typewriter';
import Button from '../components/Button';
import Eyebrow from '../components/Eyebrow';
import Hero from '../components/Hero';
import Ser from '../components/Ser';
import { cn, mut } from '../lib/ui';
import usePageTitle from '../hooks/usePageTitle';

const BUDGETS = ['Under ৳30,000', '৳30,000–60,000', '৳60,000+', 'Not sure yet'];
const NEEDS = ['website', 'mobile app', 'store', 'new brand'];

const LABEL = 'mt-6 text-[13px] font-semibold tracking-[0.16em] text-muted uppercase';
const FIELD = 'w-full border-0 border-b border-muted bg-transparent py-3 font-body text-[16px] leading-natural text-fg outline-none transition-[border-color] duration-300 placeholder:text-[#757575] focus:border-accent';
const PILL = 'cursor-pointer rounded-full border px-5 py-2.5 font-body text-[14px] leading-natural transition-all duration-300';
const ERR = 'my-2 text-[#d64545]';

export default function Contact() {
  usePageTitle('Contact', 'Tell us about your project. We reply within one working day.');
  const dispatch = useDispatch();
  const location = useLocation();
  const { form, status, error } = useSelector((state) => state.quote);
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (location.state?.message) dispatch(setField({ key: 'message', value: location.state.message }));
  }, [location.state, dispatch]);

  const bind = (key) => ({
    id: 'q-' + key,
    value: form[key],
    onChange: (e) => dispatch(setField({ key, value: e.target.value })),
  });
  const valid = form.name.trim() && /\S+@\S+\.\S+/.test(form.email) && form.message.trim();

  const onSubmit = (e) => {
    e.preventDefault();
    setTouched(true);
    if (valid) dispatch(submitQuote(form));
  };

  return (
    <section className='grid min-h-screen grid-cols-1 md:grid-cols-2'>
      <Hero className='flex flex-col justify-between gap-10 px-5 pt-26 pb-8 md:gap-0 md:px-16 md:pt-30 md:pb-10'>
        <div />
        <div>
          <h1>Let’s build <Ser>together.</Ser></h1>
          <div className='mt-6 mb-7 font-mono text-[20px] leading-natural font-bold whitespace-nowrap text-sky-soft md:text-[28px]'>I need a <Typewriter words={NEEDS} /></div>
          <p className={mut + ' max-w-[440px] text-[20px]'}>Tell us about your project. We reply within one working day.</p>
        </div>
        <div className='grid gap-1 leading-[2] text-[#a9b6d6]'>
          <b className='text-white'>Rab Mansion, Ashkona, Dakshinkhan, Uttara, Dhaka 1230</b>
          <span>+88 01715163908 · +88 01983167789</span>
          <span>info@naivesoft.net</span>
        </div>
      </Hero>

      <div className='px-5 py-12 md:px-20 md:pt-30 md:pb-20'>
        {status === 'success' ? (
          <div>
            <h2 className='mb-4'>Thank you<Ser>.</Ser></h2>
            <p className={mut}>We received your message and will reply within one working day.</p>
            <Button variant='dark' className='mt-6' onClick={() => dispatch(resetQuote())}>Send another</Button>
          </div>
        ) : (
          <form className='grid gap-1' onSubmit={onSubmit} noValidate>
            <Eyebrow>Project brief</Eyebrow>
            <label className={LABEL} htmlFor='q-name'>Full name</label>
            <input className={FIELD} placeholder='Your name' {...bind('name')} />
            <label className={LABEL} htmlFor='q-email'>Email</label>
            <input className={FIELD} type='email' placeholder='you@company.com' {...bind('email')} />
            <label className={LABEL} htmlFor='q-phone'>Phone</label>
            <input className={FIELD} placeholder='+880' {...bind('phone')} />
            <label className={LABEL} htmlFor='q-message'>About the project</label>
            <textarea className={FIELD} rows={4} placeholder='What do you want to build?' {...bind('message')} />
            <label className={LABEL}>Budget</label>
            <div className='mt-3 mb-8 flex flex-wrap gap-2.5'>
              {BUDGETS.map((b) => (
                <button
                  type='button'
                  key={b}
                  className={cn(PILL, form.budget === b ? 'border-ink bg-ink text-white dark:border-royal dark:bg-royal' : 'border-muted bg-transparent text-fg')}
                  onClick={() => dispatch(setField({ key: 'budget', value: b }))}
                >{b}</button>
              ))}
            </div>
            {touched && !valid && <p className={ERR}>Please fill in all required fields correctly.</p>}
            {status === 'error' && <p className={ERR}>{error}</p>}
            <Button variant='dark' type='submit' disabled={status === 'loading'}>
              {status === 'loading' ? 'Sending...' : 'Send message'}
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
