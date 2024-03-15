import type Model from '@ember-data/model';
import type { UnwrapComputedPropertyGetter } from '@ember/object/-private/types';
import type { Merge, SetRequired, TupleToUnion } from 'type-fest';
export type LoadedModel<T extends Model, P extends (keyof T)[]> = Merge<SetRequired<T, TupleToUnion<P>>, {
    get<K extends keyof SetRequired<T, TupleToUnion<P>>>(key: K): UnwrapComputedPropertyGetter<SetRequired<T, TupleToUnion<P>>[K]>;
}>;
export default function ensureModelProperties<T extends Model, C extends typeof Model, P extends (keyof T)[]>(model: T, modelConstructor: C, properties: P): LoadedModel<T, P>;
//# sourceMappingURL=ensure-model-properties.d.ts.map