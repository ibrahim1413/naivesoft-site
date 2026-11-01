export default function Marquee({ items, big = false, reverse = false }) {
  const list = [...items, ...items];
  const cls = 'mq' + (big ? ' big' : '') + (reverse ? ' rev' : '');
  return (
    <div className='mq-wrap'>
      <div className={cls}>
        {list.map((item, i) =>
          typeof item === 'string'
            ? <span key={i}>{item}</span>
            : <img key={i} src={item.logo} alt={item.name} className='mq-logo' />
        )}
      </div>
    </div>
  );
}
