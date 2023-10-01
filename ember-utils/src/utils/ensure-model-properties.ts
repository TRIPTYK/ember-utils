import type Model from '@ember-data/model';
import type { UnwrapComputedPropertyGetter } from '@ember/object/-private/types';
import type { Merge, SetRequired, TupleToUnion } from 'type-fest';

export type LoadedModel<T extends Model, P extends (keyof T)[]> = Merge<
  SetRequired<T, TupleToUnion<P>>,
  {
    get<K extends keyof SetRequired<T, TupleToUnion<P>>>(
      key: K,
    ): UnwrapComputedPropertyGetter<SetRequired<T, TupleToUnion<P>>[K]>;
  }
>;

export function ensureModelProperties<
  T extends Model,
  C extends typeof Model,
  P extends (keyof T)[],
>(model: T, modelConstructor: C, properties: P): LoadedModel<T, P> {
  modelConstructor.eachAttribute((name) => {
    if (
      properties.includes(name.toString() as keyof T) &&
      model[name.toString() as keyof T] === undefined
    ) {
      throw new Error(
        `Missing ${
          modelConstructor.modelName
        } attribute property in model: ${name.toString()} (value: undefined)`,
      );
    }
  });
  modelConstructor.eachRelationship((name: string, meta) => {
    if (properties.includes(name.toString() as keyof T)) {
      const reference = model[meta.kind](meta.name as never);
      if (reference.value() === null) {
        throw new Error(
          `Missing ${
            modelConstructor.modelName
          } relationship property in model: ${name.toString()}`,
        );
      }
    }
  });
  return model as unknown as LoadedModel<T, P>;
}
