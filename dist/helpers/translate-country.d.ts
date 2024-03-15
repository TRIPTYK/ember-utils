/// <reference types="ember__component" />
interface TranslateCountrySignature {
    Args: {
        Positional: [string[] | string, string?];
    };
    Return: string | (string | undefined)[] | undefined;
}
declare const translateCountry: import("@ember/component/helper").FunctionBasedHelper<{
    Args: {
        Positional: [string | string[], (string | undefined)?];
        Named: import("@ember/component/helper").EmptyObject;
    };
    Return: string | (string | undefined)[] | undefined;
}>;
declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        'translate-country': typeof translateCountry;
    }
}
export { translateCountry as default, TranslateCountrySignature };
