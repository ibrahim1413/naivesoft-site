import Button from '../components/Button';
import usePageTitle from '../hooks/usePageTitle';
import services from '../data/services';

export default function Services() {
  usePageTitle('Services', 'eCommerce, websites, apps, marketing, video and branding from one team.');
  return (
    <>
      <section className='wrap page-top'>
        <span className='eb'>Services</span>
        <h1>Six disciplines. <span className='ser'>One team.</span></h1>
        <p className='mut lead'>Pick a single service or combine them into a complete growth plan.</p>
      </section>

      <section className='wrap svc-list'>
        {services.map((s, i) => (
          <div className='svc-row' key={s.id}>
            <span className='ser svc-num'>0{i + 1}</span>
            <div><h3>{s.title}</h3><p className='mut'>{s.short}</p></div>
            <div className='tags'>{s.points.map((p) => <span key={p}>{p}</span>)}</div>
            <span className='svc-arrow'>→</span>
          </div>
        ))}
      </section>

      <section className='hero cta-band'>
        <div className='wrap g2 cta-split'>
          <h2>Not sure where to <span className='ser'>start?</span></h2>
          <div className='row-gap'>
            <Button to='/contact'>Book a free call</Button>
            <Button to='/pricing' variant='ghost'>See pricing</Button>
          </div>
        </div>
      </section>
    </>
  );
}
