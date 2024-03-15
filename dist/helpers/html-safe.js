import { helper } from '@ember/component/helper';
import { htmlSafe as htmlSafe$1 } from '@ember/template';

const htmlSafe = helper(function htmlSafe(params) {
  return htmlSafe$1(params.join());
});

export { htmlSafe as default };
//# sourceMappingURL=html-safe.js.map
