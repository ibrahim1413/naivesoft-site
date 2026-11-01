export default function MockFrame({ src, alt = '', label = 'Project preview', color = 'var(--royal)', height = 360, className = '', style }) {
  return (
    <div className={'mock ' + (src ? 'has-img ' : 'mock-placeholder ') + className} style={{ '--c': color, height, ...style }}>
      <div className='mb'><i /><i /><i /></div>
      {src ? <img src={src} alt={alt} loading='lazy' /> : (
        <div className='ms'>
          <span className='mock-mark'>NS</span>
          <span className='mock-label'>{label}</span>
          <span className='mock-lines'><i /><i /><i /></span>
          <span className='mock-note'>Illustrative preview · add approved project image</span>
        </div>
      )}
    </div>
  );
}
