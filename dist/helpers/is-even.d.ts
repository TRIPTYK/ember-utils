/// <reference types="ember__component" />
interface IsEvenSignature {
    Args: {
        Positional: [number];
    };
    Return: boolean;
}
declare const isEven: import("@ember/component/helper").FunctionBasedHelper<{
    Args: {
        Positional: [number];
        Named: import("@ember/component/helper").EmptyObject;
    };
    Return: boolean;
}>;
declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        'is-even': typeof isEven;
    }
}
export { isEven as default, IsEvenSignature };
