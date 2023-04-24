import { format, parseISO } from 'date-fns';
import { helper } from '@ember/component/helper';

export function dateFormat(
  [date, fmt]: [Date | string, string | undefined] /*, hash*/
) {
  return format(
    typeof date === 'string' ? parseISO(date) : date,
    fmt ?? 'dd/MM/yyyy'
  );
}

export default helper(dateFormat);
