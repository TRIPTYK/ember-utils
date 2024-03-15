/* eslint-disable no-restricted-globals */
import { modifier } from 'ember-modifier';

export default modifier(
  (element: HTMLElement, [className, offset]: [string, number]) => {
    function handleScroll() {
      // eslint-disable-next-line no-restricted-globals
      if (window.scrollY > offset) {
        element.classList.add(className);
      } else {
        element.classList.remove(className);
      }
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }
);
