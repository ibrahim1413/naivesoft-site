import { useDispatch, useSelector } from 'react-redux';
import { setFilter, selectVisible } from '../features/portfolio/portfolioSlice';
import MockFrame from '../components/MockFrame';
import Reveal from '../components/Reveal';
import Button from '../components/Button';
import usePageTitle from '../hooks/usePageTitle';
import { Link } from 'react-router-dom';

const FILTERS = ['All', 'Websites', 'eCommerce', 'Apps', 'Branding'];
const HEIGHTS = [360, 470, 300, 430, 340, 480, 380, 320];

export default function Portfolio() {
  usePageTitle('Portfolio', 'Selected websites, stores and apps built by Naive Soft.');
  const dispatch = useDispatch();
  const active = useSelector((state) => state.portfolio.activeFilter);
  const items = useSelector(selectVisible);

  return (
    <>
      <section className='hero pf-hero'>
        <div className='wrap pf-head'>
          <div>
            <span className='eb'>Index · {items.length} projects</span>
            <h1>Selected <span className='ser'>work</span></h1>
          </div>
          <div className='pills'>
            {FILTERS.map((f) => (
              <button key={f} className={'pill' + (f === active ? ' on' : '')} onClick={() => dispatch(setFilter(f))}>{f}</button>
            ))}
          </div>
        </div>
      </section>

      <section className='pf-body'>
        <div className='wrap'>
          <div className='portfolio-intro'>
            <div><span className='eb'>Selected project</span><h2>Work shaped around <span className='ser'>real business needs.</span></h2><p className='mut'>Project screenshots and verified case-study details can be added as each client-approved asset is ready.</p></div>
            <div className='portfolio-feature-note'><span className='ser'>01 — 08</span><p>Websites, eCommerce and mobile app work currently listed in this portfolio.</p></div>
          </div>
          <div className='masonry'>
            {items.map((p, i) => (
              <Reveal key={p.id} className='mas-item'>
                <MockFrame src={p.image} alt={p.name} label={p.name} color={p.color} height={HEIGHTS[i % HEIGHTS.length]} />
                <div className='work-meta'><b>{p.name}</b><span>↗</span></div>
                <div className='mut'>{p.kind}</div><p className='project-description'>{p.description}</p>
              </Reveal>
            ))}
          </div>
          {items.length === 0 && <div className='portfolio-empty'><span className='eb'>Branding & design</span><h2>Creative work, <span className='ser'>presented with purpose.</span></h2><p className='mut'>Branding projects will appear here once approved portfolio artwork is added. Contact us to discuss a logo, visual identity or campaign design.</p><Link className='btn btn-dark' to='/contact'>Discuss a design project</Link></div>}
        </div>
      </section>

      <section className='hero cta-band'>
        <div className='wrap center'>
          <h2>Have a project <span className='ser'>in mind?</span></h2>
          <Button to='/contact'>Get a free quote</Button>
        </div>
      </section>
    </>
  );
}
