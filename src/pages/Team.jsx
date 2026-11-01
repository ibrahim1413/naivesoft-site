import Reveal from '../components/Reveal';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import usePageTitle from '../hooks/usePageTitle';
import team from '../data/team';

const initial = (name) => name.replace(/^(Md\.?\s*|Mst\.\s*)/i, '')[0]?.toUpperCase() || name[0];
const colors = ['var(--royal)', '#22356B', 'var(--logo-blue)'];

export default function Team() {
  usePageTitle('Our Team', 'Meet the people behind Naive Soft.');
  return (
    <>
      <section className="wrap page-top">
        <span className="eb">Meet the people</span>
        <h1>Good work is made by <span className="ser">good people.</span></h1>
        <p className="lead mut">A multidisciplinary team bringing design, development and creative thinking together.</p>
      </section>
      <section className="wrap team-body">
        <SectionTitle eyebrow="The people behind Naive Soft">Meet our <span className="ser">team.</span></SectionTitle>
        <div className="g3 team-grid">
          {team.map((member, i) => (
            <Reveal key={member.name} className="team-card">
              <div className="portrait" style={{ background: colors[i % colors.length] }}>
                {member.photo ? <img src={member.photo} alt={member.name} /> : <span className="ser">{initial(member.name)}</span>}
              </div>
              <b className="tm-name">{member.name}</b>
              <span className="mut">{member.role}</span>
            </Reveal>
          ))}
        </div>
        <p className="team-note mut">Meet the nine members featured on the Naive Soft website.</p>
      </section>
      <section className="hero cta-band">
        <div className="wrap center">
          <h2>Let’s make something <span className="ser">meaningful.</span></h2>
          <p className="mut">Have a project in mind? We’d love to hear about it.</p>
          <Button to="/contact">Work with us</Button>
        </div>
      </section>
    </>
  );
}
