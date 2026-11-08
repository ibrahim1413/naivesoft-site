import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../features/theme/themeSlice';
import { cn } from '../lib/ui';

export default function ThemeToggle({ onHero = false }) {
  const mode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();
  return (
    <label className='relative inline-block h-[30px] w-14 flex-none cursor-pointer' title='Dark / light'>
      <input
        type='checkbox'
        className='peer absolute inset-0 z-2 m-0 size-full cursor-pointer opacity-0'
        checked={mode === 'dark'}
        onChange={() => dispatch(toggleTheme())}
        aria-label='Toggle dark mode'
      />
      <span
        className={cn(
          'absolute inset-0 rounded-full border',
          onHero ? 'border-white/35 bg-white/14' : 'border-hair bg-[rgba(120,140,180,0.18)]',
         
          'after:absolute after:top-[3px] after:left-[3px] after:size-[22px] after:rounded-full after:bg-[#ffd66b] after:transition-[translate,background,box-shadow] after:duration-450 after:ease-soft',
          'peer-checked:after:translate-x-[26px] peer-checked:after:bg-transparent peer-checked:after:shadow-[inset_-7px_-2px_0_0_#e8eef9]'
        )}
      />
    </label>
  );
}
