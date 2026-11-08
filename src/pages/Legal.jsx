import usePageTitle from '../hooks/usePageTitle';
import Eyebrow from '../components/Eyebrow';
import Ser from '../components/Ser';
import { cn, gutter } from '../lib/ui';

const H2 = 'mt-10 mb-3 text-[28px]';
const P = 'max-w-[760px] leading-[1.85] text-muted';
const A = 'text-accent underline';

function LegalPage({ title, children }) {
  return (
    <section className={cn(gutter, 'max-w-[900px] pt-40 pb-30')}>
      <Eyebrow>Website information</Eyebrow>
      <h1 className='mt-5 mb-2.5 text-[clamp(44px,6vw,72px)]'>{title}</h1>
      <p className={P}>Draft for review · Updated October 2026</p>
      {children}
    </section>
  );
}

export function Privacy() {
  usePageTitle('Privacy Policy', 'How Naive Soft may collect and use information submitted through this website.');
  return (
    <LegalPage title={<>Privacy <Ser>Policy.</Ser></>}>
      <p className={P}>Naive Soft may receive the information you choose to submit through contact or project enquiry forms, such as your name, email address, phone number, budget range and project details. We use that information to respond to your enquiry and discuss requested services.</p>
      <h2 className={H2}>How information is used</h2>
      <p className={P}>Information submitted to us should be used only for communicating about your request, preparing proposals and providing services you ask us to discuss. Do not submit passwords, payment card details or other sensitive information through this website form.</p>
      <h2 className={H2}>Sharing and storage</h2>
      <p className={P}>Information may be processed by service providers needed to operate the website or communicate with you. The site owner should confirm the actual providers, retention periods, access controls and any cross-border processing before publishing this policy as final.</p>
      <h2 className={H2}>Your choices</h2>
      <p className={P}>To ask about information you have submitted or request a correction, contact <a className={A} href='mailto:info@naivesoft.net'>info@naivesoft.net</a>. This page is a starter draft and should be reviewed against the site's real hosting, analytics, form and data-handling practices before launch.</p>
    </LegalPage>
  );
}

export function Terms() {
  usePageTitle('Terms of Service', 'General terms for using the Naive Soft website and requesting services.');
  return (
    <LegalPage title={<>Terms of <Ser>Service.</Ser></>}>
      <p className={P}>This website provides general information about Naive Soft and its digital services. Submitting an enquiry does not itself create a client relationship, confirm a booking or guarantee a price, delivery date or project outcome.</p>
      <h2 className={H2}>Proposals and project scope</h2>
      <p className={P}>Final scope, deliverables, schedule, fees, payment milestones, revision limits, intellectual-property transfer and support arrangements should be stated in a written proposal or service agreement accepted by both parties.</p>
      <h2 className={H2}>Portfolio and service information</h2>
      <p className={P}>Examples and descriptions are provided for general information. Availability of a particular service, technology or delivery date should be confirmed directly with Naive Soft.</p>
      <h2 className={H2}>Contact</h2>
      <p className={P}>Questions about these terms can be sent to <a className={A} href='mailto:info@naivesoft.net'>info@naivesoft.net</a>. This starter page is not legal advice and should be reviewed for the company's actual business practices and applicable law before publication.</p>
    </LegalPage>
  );
}
