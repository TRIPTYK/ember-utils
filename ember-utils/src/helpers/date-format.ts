import { format, parseISO } from 'date-fns';
import { helper } from '@ember/component/helper';

export interface DateFormatSignature {
  Args: {
    Positional: [Date | string, string | undefined];
  };
  Return: string;
}

const dateFormat = helper<DateFormatSignature>(function dateFormat([
  date,
  fmt,
]: DateFormatSignature['Args']['Positional']) {
  return format(
    typeof date === 'string' ? parseISO(date) : date,
    fmt ?? 'dd/MM/yyyy',
  );
});

export default dateFormat;

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'date-format': typeof dateFormat;
  }
}
