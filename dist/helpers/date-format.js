import { format, parseISO } from 'date-fns';
import { helper } from '@ember/component/helper';

const dateFormat = helper(function dateFormat([date, fmt]) {
  return format(typeof date === 'string' ? parseISO(date) : date, fmt ?? 'dd/MM/yyyy');
});

export { dateFormat as default };
//# sourceMappingURL=date-format.js.map
