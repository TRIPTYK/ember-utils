/// <reference types="ember__routing" />
import Route from '@ember/routing/route';
type Resolved<P> = P extends Promise<infer T> ? T : P;
/** Get the resolved model value from a route. */
type ModelFrom<R extends Route> = Resolved<ReturnType<R['model']>>;
export { Resolved, ModelFrom };
