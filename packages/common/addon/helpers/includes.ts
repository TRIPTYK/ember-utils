import { helper } from '@ember/component/helper';

export function includes<T>([array, needle]: [T[], T]) {
  return array.includes(needle);
}

export default helper(includes);
