import { useDispatch, useSelector } from 'react-redux';
import { setTab } from '../features/pricing/pricingSlice';
import { featureRows, websitePlans, marketingPlans, domains, hosting, faqs } from '../data/pricing';
import Button from '../components/Button';
import usePageTitle from '../hooks/usePageTitle';

const TABS = [['website', 'Website'], ['marketing', 'Marketing'], ['hosting', 'Hosting']];

export default function Pricing() {
  usePageTitle('Pricing', 'Transparent starting prices for websites, marketing and hosting.');
  const dispatch = useDispatch();
  const tab = useSelector((state) => state.pricing.activeTab);

  return (
    <>
      <section className='wrap page-top center'>
        <h1>Simple pricing, <span className='ser'>no surprises.</span></h1>
        <div className='seg'>
          {TABS.map(([key, label]) => (
            <button key={key} className={'seg-btn' + (tab === key ? ' on' : '')} onClick={() => dispatch(setTab(key))}>{label}</button>
          ))}
        </div>
      </section>

      <section className='wrap price-body'>
        {tab === 'website' && (
          <div className='ptable'>
            <div className='prow phead'>
              <div />
              {websitePlans.map((p) => (
                <div key={p.name} className={'pcol' + (p.featured ? ' feat' : '')}><b>{p.name}</b><span>{p.price}</span></div>
              ))}
            </div>
            {featureRows.map((f, i) => (
              <div className='prow' key={f}>
                <div>{f}</div>
                {websitePlans.map((p) => (
                  <div key={p.name} className={'pcell' + (p.featured ? ' feat' : '')}>{p.has[i] ? '✓' : '–'}</div>
                ))}
              </div>
            ))}
          </div>
        )}

        {tab === 'marketing' && (
          <div>
            {marketingPlans.map((p) => (
              <div className='mrow' key={p.name}>
                <h3>{p.name}</h3>
                <p className='mut'>{p.desc}</p>
                <div className='mprice'>{p.price}<small> /month</small></div>
                <Button to='/contact' variant='dark' small>Choose</Button>
              </div>
            ))}
          </div>
        )}

        {tab === 'hosting' && (
          <>
            <div className='g3'>
              {domains.map((d) => (<div className='card center' key={d.ext}><span className='eb'>{d.ext}</span><h3>{d.price}</h3></div>))}
            </div>
            <div className='g3' style={{ marginTop: 24 }}>
              {hosting.map((h) => (<div className='card' key={h.name}><h3 style={{ fontSize: 22 }}>{h.name}</h3><p className='mut'>{h.desc}</p></div>))}
            </div>
          </>
        )}
      </section>

      <section className='wrap faq'>
        <span className='eb'>FAQ</span>
        {faqs.map((f) => (
          <details key={f.q}><summary>{f.q}</summary><p className='mut'>{f.a}</p></details>
        ))}
      </section>

      <section className='hero cta-band'>
        <div className='wrap center'>
          <h2>Not sure which plan <span className='ser'>fits?</span></h2>
          <Button to='/contact'>Talk to us</Button>
        </div>
      </section>
    </>
  );
}
