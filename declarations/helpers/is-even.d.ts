export interface IsEvenSignature {
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
export default isEven;
declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        'is-even': typeof isEven;
    }
}
//# sourceMappingURL=is-even.d.ts.map