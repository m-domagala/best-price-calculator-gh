import { useEffect, useState } from 'react';
import { TRefElement } from '../types/types';

const useScrollHeight = (elementRef: TRefElement, isOpen: boolean) => {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    if (elementRef.current && isOpen) {
      setScrollHeight(elementRef.current.scrollHeight);
    } else setScrollHeight(0);
  }, [isOpen, elementRef]);

  return { scrollHeight };
};

export default useScrollHeight;
