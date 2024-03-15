import { modifier } from 'ember-modifier';

/* eslint-disable no-restricted-globals */
var offsetClass = modifier((element, [className, offset]) => {
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
});

export { offsetClass as default };
//# sourceMappingURL=offset-class.js.map
