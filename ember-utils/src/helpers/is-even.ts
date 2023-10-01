import { helper } from '@ember/component/helper';

export function isEven([number]: [number]) {
  return number % 2 === 0;
}

export default helper(isEven);
