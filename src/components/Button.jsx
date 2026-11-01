import { Link } from 'react-router-dom';

export default function Button({ to, href, variant = 'primary', small = false, children, ...rest }) {
  const cls = 'btn btn-' + variant + (small ? ' btn-sm' : '');
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>;
  if (href) return <a href={href} className={cls} {...rest}>{children}</a>;
  return <button className={cls} {...rest}>{children}</button>;
}
