import Button from '../components/Button';
import Eyebrow from '../components/Eyebrow';
import Ser from '../components/Ser';
import usePageTitle from '../hooks/usePageTitle';
import { cn, mut, wrap } from '../lib/ui';

export default function NotFound() {
  usePageTitle('Page not found');
  return (
    <section className={cn(wrap, 'min-h-[70vh] pt-30 pb-0 md:pb-22 text-center md:pt-42')}>
      <Eyebrow>404</Eyebrow>
      <h1 className='mx-auto mt-6 mb-8 max-w-[1000px]'>This page <Ser>doesn’t exist.</Ser></h1>
      <p className={mut + ' mx-auto mt-6 mb-10 max-w-[560px] text-[20px]'}>The link may be broken or the page was moved.</p>
      <Button to='/' variant='dark'>Back to home</Button>
    </section>
  );
}
