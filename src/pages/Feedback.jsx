import Reveal from '../components/Reveal';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import usePageTitle from '../hooks/usePageTitle';
import feedback from '../data/feedback';

export default function Feedback() {
  usePageTitle('Client Feedback', 'Client feedback and testimonials for Naive Soft.');
  return (
    <>
      <section className="wrap page-top">
        <span className="eb">Client feedback</span>
        <h1>Trust is built <span className="ser">through the work.</span></h1>
        <p className="lead mut">Hear from seven clients about their experience working with Naive Soft.</p>
      </section>
      <section className="wrap feedback-body">
        <SectionTitle eyebrow="Client stories">Feedback that <span className="ser">matters.</span></SectionTitle>
        <div className="feedback-grid">
          {feedback.map((item) => (
            <Reveal className="feedback-card card" key={item.name}>
              <span className="feedback-mark ser">“</span>
              <blockquote>{item.quote}</blockquote>
              <div className="feedback-author">
                <img className="feedback-photo" src={item.photo} alt={item.name} loading="lazy" />
                <div><b>{item.name}</b><span className="mut">{item.role}</span></div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="hero cta-band">
        <div className="wrap center">
          <h2>Ready to start your <span className="ser">own story?</span></h2>
          <p className="mut">Tell us what you’re building and let’s discuss how we can help.</p>
          <Button to="/contact">Start a project</Button>
        </div>
      </section>
    </>
  );
}
