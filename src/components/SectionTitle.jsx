import Eyebrow from './Eyebrow';

export default function SectionTitle({ eyebrow, children, maxWidth = 780 }) {
  return (
    <div className='mb-14'>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className='mt-4' style={{ maxWidth }}>{children}</h2>
    </div>
  );
}
