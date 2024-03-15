/// <reference types="ember__template" />
/// <reference types="ember__component" />
import { SafeString } from '@ember/template/-private/handlebars';
interface HtmlSafeSignature {
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
declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        'html-safe': typeof htmlSafe;
    }
}
export { htmlSafe as default, HtmlSafeSignature };
