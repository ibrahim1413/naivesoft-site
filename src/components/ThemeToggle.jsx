import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../features/theme/themeSlice';

export default function ThemeToggle() {
  const mode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();
  return (
    <label className='tgl' title='Dark / light'>
      <input type='checkbox' checked={mode === 'dark'} onChange={() => dispatch(toggleTheme())} aria-label='Toggle dark mode' />
      <span />
    </label>
  );
}
