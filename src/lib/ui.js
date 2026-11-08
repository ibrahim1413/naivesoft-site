export const cn = (...parts) => parts.filter(Boolean).join(' ');
export const gutter = 'mx-auto px-5 md:px-8';
export const wrap = gutter + ' max-w-[1200px]';
export const sec = 'py-18 md:py-30';
export const mut = 'text-muted leading-[1.6]';
export const cardSurface = 'rounded-card border border-hair bg-surface shadow-soft';
export const card =
  cardSurface +
  ' transition-[transform,box-shadow,background-color] duration-500 ease-soft hover:-translate-y-2.5 hover:shadow-[0_40px_70px_-28px_rgba(10,21,54,0.4)]';
export const logoChip =
  'inline-block rounded-[14px] border border-hair bg-white px-3 py-1.5 md:max-lg:px-2 md:max-lg:py-[5px]';
