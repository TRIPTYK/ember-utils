export interface TruncateSignature {
    Args: {
        Positional: [string, number];
    };
    Return: string;
}
export declare function truncate(params: [string, number]): string;
declare const truncateHelper: import("@ember/component/helper").FunctionBasedHelper<{
    Args: {
        Positional: [string, number];
        Named: import("@ember/component/helper").EmptyObject;
    };
    Return: string;
}>;
export default truncateHelper;
declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        truncate: typeof truncateHelper;
    }
}
//# sourceMappingURL=truncate.d.ts.map