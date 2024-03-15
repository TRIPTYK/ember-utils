/// <reference types="ember-data" />
/// <reference types="ember__object" />
import Model from '@ember-data/model';
import { UnwrapComputedPropertyGetter } from '@ember/object/-private/types';
import { Merge, SetRequired, TupleToUnion } from 'type-fest';
type LoadedModel<T extends Model, P extends (keyof T)[]> = Merge<SetRequired<T, TupleToUnion<P>>, {
    get<K extends keyof SetRequired<T, TupleToUnion<P>>>(key: K): UnwrapComputedPropertyGetter<SetRequired<T, TupleToUnion<P>>[K]>;
}>;
declare function ensureModelProperties<T extends Model, C extends typeof Model, P extends (keyof T)[]>(model: T, modelConstructor: C, properties: P): LoadedModel<T, P>;
export { LoadedModel, ensureModelProperties as default };
