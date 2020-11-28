import { useLayoutEffect, useEffect, useState } from 'react';

const useWindowSize = () => {
  const [size, setSize] = useState<number | null>(null);

  const [showChild, setShowChild] = useState(false);

  // Wait until after client-side hydration to show
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    // You can show some kind of placeholder UI here
    return null;
  }

  useLayoutEffect(() => {
    const updateSize = () => {
      setSize(window.innerWidth);
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return size;
};

export default useWindowSize;
