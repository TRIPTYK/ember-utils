import { helper } from '@ember/component/helper';
import { htmlSafe as HS } from '@ember/template';
import { SafeString } from '@ember/template/-private/handlebars';

export interface HtmlSafeSignature {
  Args: {
    Positional: [string];
  };
  Return: SafeString;
}

const htmlSafe = helper<HtmlSafeSignature>(function htmlSafe(params: [string]) {
  return HS(params.join());
});

export default htmlSafe;

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'html-safe': typeof htmlSafe;
  }
}
