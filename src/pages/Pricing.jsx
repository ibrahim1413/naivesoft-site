import { useDispatch, useSelector } from 'react-redux';
import { setTab } from '../features/pricing/pricingSlice';
import { featureRows, websitePlans, marketingPlans, domains, hosting, faqs } from '../data/pricing';
import Button from '../components/Button';
import CtaBand from '../components/CtaBand';
import Eyebrow from '../components/Eyebrow';
import Ser from '../components/Ser';
import usePageTitle from '../hooks/usePageTitle';
import { card, cn, gutter, mut, wrap } from '../lib/ui';

const TABS = [['website', 'Website'], ['marketing', 'Marketing'], ['hosting', 'Hosting']];

const ROW = 'grid grid-cols-[1.4fr_1fr_1fr_1fr] items-center border-t border-hair text-[12px] md:text-[16px]';
const CELL = 'px-2 py-[18px]';
const HEAD = 'px-6 py-7 text-center';

export default function Pricing() {
  usePageTitle('Pricing', 'Transparent starting prices for websites, marketing and hosting.');
  const dispatch = useDispatch();
  const tab = useSelector((state) => state.pricing.activeTab);

  return (
    <>
      <section className={cn(wrap, 'pt-30 pb-0 md:pb-22 text-center md:pt-42')}>
        <h1 className='mx-auto mt-6 mb-8 max-w-[1000px]'>Simple pricing, <Ser>no surprises.</Ser></h1>
        <div className='mt-10 inline-flex rounded-full border border-hair bg-surface p-1.5'>
          {TABS.map(([key, label]) => (
            <button
              key={key}
              className={cn(
                'cursor-pointer rounded-full border-0 px-7 py-3 font-body text-[15px] leading-natural font-semibold transition-all duration-300',
                tab === key ? 'bg-ink text-white dark:bg-royal' : 'bg-transparent text-muted'
              )}
              onClick={() => dispatch(setTab(key))}
            >{label}</button>
          ))}
        </div>
      </section>

      <section className={cn(wrap, 'min-h-[420px] pb-0 md:pb-26')}>
        {tab === 'website' && (
          <div className='rounded-[28px] bg-surface px-3 pt-2 pb-4 shadow-soft md:px-8 md:pt-4 md:pb-8'>
            <div className={cn(ROW, 'items-end border-t-0')}>
              <div />
              {websitePlans.map((p) => (
                <div key={p.name} className={cn(HEAD, p.featured && 'rounded-t-[24px] bg-royal text-white')}>
                  <b className='block font-semibold'>{p.name}</b>
                  <span className='mt-1.5 block font-display text-[20px] leading-natural font-bold md:text-[34px]'>{p.price}</span>
                </div>
              ))}
            </div>
            {featureRows.map((f, i) => (
              <div className={ROW} key={f}>
                <div className={CELL}>{f}</div>
                {websitePlans.map((p) => (
                  <div key={p.name} className={cn(CELL, 'text-center font-semibold', p.featured ? 'bg-royal text-white' : 'text-accent')}>{p.has[i] ? '✓' : '–'}</div>
                ))}
              </div>
            ))}
          </div>
        )}

        {tab === 'marketing' && (
          <div>
            {marketingPlans.map((p) => (
              <div className='grid grid-cols-1 items-center gap-3 border-t border-hair py-8 md:grid-cols-[1fr_2fr_1fr_auto] md:gap-8' key={p.name}>
                <h3>{p.name}</h3>
                <p className={mut}>{p.desc}</p>
                <div className='font-display text-[30px] leading-natural font-bold text-accent'>{p.price}<small className='font-body text-[14px] leading-natural font-normal text-muted'> /month</small></div>
                <Button to='/contact' variant='dark' small>Choose</Button>
              </div>
            ))}
          </div>
        )}

        {tab === 'hosting' && (
          <>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
              {domains.map((d) => (
                <div className={cn(card, 'p-8 text-center')} key={d.ext}><Eyebrow>{d.ext}</Eyebrow><h3>{d.price}</h3></div>
              ))}
            </div>
            <div className='mt-6 grid grid-cols-1 gap-6 md:grid-cols-3'>
              {hosting.map((h) => (
                <div className={cn(card, 'p-8')} key={h.name}><h3 className='text-[22px]'>{h.name}</h3><p className={mut}>{h.desc}</p></div>
              ))}
            </div>
          </>
        )}
      </section>

      <section className={cn(gutter, 'max-w-[900px] pb-0 md:pb-30')}>
        <Eyebrow className='mb-6 block'>FAQ</Eyebrow>
        {faqs.map((f) => (
          <details key={f.q} className='group border-t border-hair py-6'>
            <summary className="flex cursor-pointer list-none justify-between font-semibold after:text-[24px] after:text-accent after:content-['+'] group-open:after:content-['–'] [&::-webkit-details-marker]:hidden">{f.q}</summary>
            <p className={mut + ' mt-3'}>{f.a}</p>
          </details>
        ))}
      </section>

      <CtaBand title={<>Not sure which plan <Ser>fits?</Ser></>}>
        <Button to='/contact'>Talk to us</Button>
      </CtaBand>
    </>
  );
}
