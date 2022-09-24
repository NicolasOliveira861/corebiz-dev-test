import { useState, useEffect } from 'react';

const useDeviceScreen = (screenWidth: number) => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowsSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowsSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowsSizeChange);
    };
  }, []);

  return width <= screenWidth;
};

export default useDeviceScreen;
