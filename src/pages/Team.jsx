import Reveal from '../components/Reveal';
import Button from '../components/Button';
import CtaBand from '../components/CtaBand';
import Eyebrow from '../components/Eyebrow';
import SectionTitle from '../components/SectionTitle';
import Ser from '../components/Ser';
import usePageTitle from '../hooks/usePageTitle';
import team from '../data/team';
import { cn, wrap, mut } from '../lib/ui';

const initial = (name) => name.replace(/^(Md\.?\s*|Mst\.\s*)/i, '')[0]?.toUpperCase() || name[0];
const colors = ['bg-royal', 'bg-[#22356b]', 'bg-logo-blue'];

export default function Team() {
  usePageTitle('Our Team', 'Meet the people behind Naive Soft.');
  return (
    <>
      <section className={cn(wrap, 'pt-30 pb-0 md:pb-22 md:pt-42')}>
        <Eyebrow>Meet the people</Eyebrow>
        <h1 className='mt-6 mb-8 max-w-[1000px]'>Good work is made by <Ser>good people.</Ser></h1>
        <p className={mut + ' max-w-[560px] text-[20px]'}>A multidisciplinary team bringing design, development and creative thinking together.</p>
      </section>
      <section className={cn(wrap, 'pb-28')}>
        <SectionTitle eyebrow='The people behind Naive Soft'>Meet our <Ser>team.</Ser></SectionTitle>
        <div className='grid grid-cols-1 gap-x-6 gap-y-11 md:grid-cols-3'>
          {team.map((member, i) => (
            <Reveal key={member.name}>
              <div className={cn('flex h-[280px] min-h-[300px] items-end overflow-hidden rounded-card p-6 text-white md:h-[340px]', colors[i % colors.length])}>
                {member.photo
                  ? <img src={member.photo} alt={member.name} className='-m-6 size-full object-cover' />
                  : <Ser className='text-[96px] leading-[0.8]'>{initial(member.name)}</Ser>}
              </div>
              <b className='mt-4 block text-[18px]'>{member.name}</b>
              <span className={mut}>{member.role}</span>
            </Reveal>
          ))}
        </div>
        <p className={mut + ' mt-8 text-[14px]'}>Meet the nine members featured on the Naive Soft website.</p>
      </section>
      <CtaBand title={<>Let’s make something <Ser>meaningful.</Ser></>} text='Have a project in mind? We’d love to hear about it.'>
        <Button to='/contact'>Work with us</Button>
      </CtaBand>
    </>
  );
}
