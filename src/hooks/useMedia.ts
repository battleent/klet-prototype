import { useState, useEffect } from 'react';

type queryKey = 'desktop';

const useMedia = (key: queryKey): boolean => {
  const mediaQueries = {
    desktop: `screen and (min-width: 1180px)`,
  };
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(mediaQueries[key]);
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
