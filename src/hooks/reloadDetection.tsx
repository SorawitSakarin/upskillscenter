import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const detectNavigation = () => {
  const location = useLocation();
  const prevLocation = useRef(location);
  const initialLocation = useRef(location);

  useEffect(() => {
    if (prevLocation.current !== location) {
      if (initialLocation.current === location) {
        console.log('Page reloaded');
      } else {
        console.log('Navigated to another page');
      }
      prevLocation.current = location;
    }
  }, [location]);
};

export default detectNavigation;
