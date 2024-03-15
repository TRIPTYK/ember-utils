import { helper } from '@ember/component/helper';

function truncate(params) {
  const sanitizeStr = params[0].replace(/<\/?[^>]+(>|$)/g, '');
  const max = params[1];
  const array = sanitizeStr.trim().split(' ').filter(str => str !== '');
  const ellipsis = array.length > max ? '...' : '';
  return array.slice(0, max).join(' ') + ellipsis;
}
const truncateHelper = helper(truncate);

export { truncateHelper as default, truncate };
//# sourceMappingURL=truncate.js.map
