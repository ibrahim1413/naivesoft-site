import Button from '../components/Button';
import usePageTitle from '../hooks/usePageTitle';

export default function NotFound() {
  usePageTitle('Page not found');
  return (
    <section className='wrap page-top center' style={{ minHeight: '70vh' }}>
      <span className='eb'>404</span>
      <h1>This page <span className='ser'>doesn’t exist.</span></h1>
      <p className='mut lead' style={{ margin: '24px auto 40px' }}>The link may be broken or the page was moved.</p>
      <Button to='/' variant='dark'>Back to home</Button>
    </section>
  );
}
