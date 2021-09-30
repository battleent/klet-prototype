import { useState, useEffect } from 'react';

type queryKey = 'desktop';

const useMedia = (key: queryKey): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(key);
    const listener = () => {
      setMatches(media.matches);
    };
    listener();

    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [key]);

  return matches;
};

export default useMedia;
