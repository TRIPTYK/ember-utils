/// <reference types="ember__component" />
interface TruncateSignature {
    Args: {
        Positional: [string, number];
    };
    Return: string;
}
declare function truncate(params: [string, number]): string;
declare const truncateHelper: import("@ember/component/helper").FunctionBasedHelper<{
    Args: {
        Positional: [string, number];
        Named: import("@ember/component/helper").EmptyObject;
    };
    Return: string;
}>;
declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        truncate: typeof truncateHelper;
    }
}
export { truncateHelper as default, TruncateSignature, truncate };
