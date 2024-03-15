export interface TranslateCountrySignature {
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
export default translateCountry;
declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        'translate-country': typeof translateCountry;
    }
}
//# sourceMappingURL=translate-country.d.ts.map