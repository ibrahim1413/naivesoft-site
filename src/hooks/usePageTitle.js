import { useEffect } from 'react';

export default function usePageTitle(title, description) {
  useEffect(() => {
    document.title = title + ' | Naive Soft';
    const meta = document.querySelector('meta[name=description]');
    if (meta && description) meta.setAttribute('content', description);
  }, [title, description]);
}
