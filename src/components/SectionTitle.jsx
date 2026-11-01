export default function SectionTitle({ eyebrow, children, maxWidth = 780 }) {
  return (
    <div className='st'>
      <span className='eb'>{eyebrow}</span>
      <h2 style={{ maxWidth }}>{children}</h2>
    </div>
  );
}

