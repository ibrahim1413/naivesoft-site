import { useEffect, useState } from 'react';

export default function Typewriter({ words, typeMs = 90, eraseMs = 45, holdMs = 1600 }) {
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [erasing, setErasing] = useState(false);

  useEffect(() => {
    const word = words[index];
    let timer;
    if (!erasing && count < word.length) {
      timer = setTimeout(() => setCount(count + 1), typeMs);
    } else if (!erasing) {
      timer = setTimeout(() => setErasing(true), holdMs);
    } else if (count > 0) {
      timer = setTimeout(() => setCount(count - 1), eraseMs);
    } else {
      setErasing(false);
      setIndex((index + 1) % words.length);
    }
    return () => clearTimeout(timer);
  }, [count, erasing, index, words, typeMs, eraseMs, holdMs]);

  return <span className='tw'>{words[index].slice(0, count)}</span>;
}

