import { SafeString } from '@ember/template/-private/handlebars';
export interface HtmlSafeSignature {
    Args: {
        Positional: [string];
    };
    Return: SafeString;
}
declare const htmlSafe: import("@ember/component/helper").FunctionBasedHelper<{
    Args: {
        Positional: [string];
        Named: import("@ember/component/helper").EmptyObject;
    };
    Return: SafeString;
}>;
export default htmlSafe;
declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        'html-safe': typeof htmlSafe;
    }
}
//# sourceMappingURL=html-safe.d.ts.map