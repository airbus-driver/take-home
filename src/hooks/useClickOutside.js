import { useEffect } from 'react';

const useClickOutside = (ref, el, callback) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref && el && !ref.contains(event.target) && !el.contains(event.target)) {
        // eslint-disable-next-line no-unused-expressions
        callback && callback(true);
      } else {
        // eslint-disable-next-line no-unused-expressions
        callback && callback(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, el, callback]);
};

export default useClickOutside;
