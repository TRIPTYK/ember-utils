/// <reference types="ember__component" />
interface DateFormatSignature {
    Args: {
        Positional: [Date | string, string | undefined];
    };
    Return: string;
}
declare const dateFormat: import("@ember/component/helper").FunctionBasedHelper<{
    Args: {
        Positional: [string | Date, string | undefined];
        Named: import("@ember/component/helper").EmptyObject;
    };
    Return: string;
}>;
declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        'date-format': typeof dateFormat;
    }
}
export { dateFormat as default, DateFormatSignature };
