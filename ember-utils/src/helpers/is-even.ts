import { helper } from '@ember/component/helper';

export interface IsEvenSignature {
  Args: {
    Positional: [number];
  };
  Return: boolean;
}

const isEven = helper<IsEvenSignature>(function isEven([number]: [number]) {
  return number % 2 === 0;
});

export default isEven;

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'is-even': typeof isEven;
  }
}
