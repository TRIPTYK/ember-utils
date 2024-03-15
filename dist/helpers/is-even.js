import { helper } from '@ember/component/helper';

const isEven = helper(function isEven([number]) {
  return number % 2 === 0;
});

export { isEven as default };
//# sourceMappingURL=is-even.js.map
