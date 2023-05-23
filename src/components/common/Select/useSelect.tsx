import { useEffect, useRef, useState } from 'react';
import useScrollHeight from '../../../hooks/useScrollHeight';
import { closeElementOnOutsideAction } from '../../../helpers/helpers';

const useSelect = () => {
  const [isOpen, setIsOpen] = useState(false);

  const selectRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLUListElement>(null);

  const { scrollHeight } = useScrollHeight(optionsRef, isOpen);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleCloseOnOutsideAction = (event: MouseEvent) => {
      closeElementOnOutsideAction(event, selectRef, setIsOpen);
    };

    document.addEventListener('click', handleCloseOnOutsideAction, {
      capture: true,
    });
    return () => {
      document.removeEventListener('click', handleCloseOnOutsideAction, {
        capture: true,
      });
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !optionsRef.current || !selectRef.current) return;

    const options = optionsRef.current;
    const placeholder = selectRef.current.firstChild;
    let optionIndex = 0;

    const onKeyDown = (event: KeyboardEvent) => {
      if (
        event.key !== 'ArrowDown' &&
        event.key !== 'ArrowUp' &&
        event.key !== 'Tab'
      )
        return;
      if (event.key === 'ArrowDown') {
        const optionsLength = options.childElementCount;
        if (optionIndex >= optionsLength) return;
        const nextOption = options.children[optionIndex];
        if (nextOption.firstChild instanceof HTMLButtonElement) {
          nextOption.firstChild.focus();
          optionIndex++;
        }
      } else if (event.key === 'ArrowUp') {
        if (optionIndex <= 1) return;
        const previousOption = options.children[optionIndex - 2];
        if (previousOption.firstChild instanceof HTMLButtonElement) {
          previousOption.firstChild.focus();
          optionIndex--;
        }
      } else {
        if (placeholder instanceof HTMLButtonElement) {
          event.preventDefault();
          toggleOpen();
          placeholder.focus();
        }
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  return {
    isOpen,
    toggleOpen,
    optionsRef,
    selectRef,
    scrollHeight,
  };
};

export default useSelect;
