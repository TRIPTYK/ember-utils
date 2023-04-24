import { helper } from '@ember/component/helper';
import { htmlSafe as HS } from '@ember/template';

export function htmlSafe(params: [string]) {
  return HS(params.join());
}

export default helper(htmlSafe);
