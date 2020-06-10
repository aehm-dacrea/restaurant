import { useState, useEffect } from 'react'
import { window } from 'browser-monads'
// import useWindow from './useWindow'

function useWindowWidth() {
  // const {window} = useWindow()
  const [width, setWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  
  return width;
}

export default useWindowWidth
