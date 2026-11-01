import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setField, submitQuote, resetQuote } from '../features/quote/quoteSlice';
import Typewriter from '../components/Typewriter';
import usePageTitle from '../hooks/usePageTitle';

const BUDGETS = ['Under ৳30,000', '৳30,000–60,000', '৳60,000+', 'Not sure yet'];
const NEEDS = ['website', 'mobile app', 'store', 'new brand'];

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
    <section className='contact'>
      <div className='hero contact-left'>
        <div />
        <div>
          <h1>Let’s build <span className='ser'>together.</span></h1>
          <div className='hero-type' style={{ marginTop: 24 }}>I need a <Typewriter words={NEEDS} /></div>
          <p className='mut'>Tell us about your project. We reply within one working day.</p>
        </div>
        <div className='contact-info'>
          <b>Rab Mansion, Ashkona, Dakshinkhan, Uttara, Dhaka 1230</b>
          <span>+88 01715163908 · +88 01983167789</span>
          <span>info@naivesoft.net</span>
        </div>
      </div>

      <div className='contact-right'>
        {status === 'success' ? (
          <div className='thanks'>
            <h2>Thank you<span className='ser'>.</span></h2>
            <p className='mut'>We received your message and will reply within one working day.</p>
            <button className='btn btn-dark' onClick={() => dispatch(resetQuote())}>Send another</button>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate>
            <span className='eb'>Project brief</span>
            <label htmlFor='q-name'>Full name</label>
            <input placeholder='Your name' {...bind('name')} />
            <label htmlFor='q-email'>Email</label>
            <input type='email' placeholder='you@company.com' {...bind('email')} />
            <label htmlFor='q-phone'>Phone</label>
            <input placeholder='+880' {...bind('phone')} />
            <label htmlFor='q-message'>About the project</label>
            <textarea rows={4} placeholder='What do you want to build?' {...bind('message')} />
            <label>Budget</label>
            <div className='budget'>
              {BUDGETS.map((b) => (
                <button type='button' key={b} className={'pill-lt' + (form.budget === b ? ' on' : '')}
                  onClick={() => dispatch(setField({ key: 'budget', value: b }))}>{b}</button>
              ))}
            </div>
            {touched && !valid && <p className='err'>Please fill in all required fields correctly.</p>}
            {status === 'error' && <p className='err'>{error}</p>}
            <button className='btn btn-dark' type='submit' disabled={status === 'loading'}>
              {status === 'loading' ? 'Sending...' : 'Send message'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
