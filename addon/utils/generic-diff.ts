import type Model from '@ember-data/model';
import type ArrayProxy from '@ember/array/proxy';

export default function genericDiff<T extends { id?: string }, M extends Model>(
  models: Model[] | ArrayProxy<M>,
  array: T[]
) {
  const persistedIds = array.filter((e) => e.id !== undefined).map((e) => e.id);
  const created = array.filter((e) => e.id === undefined);
  const deleted = models.filter(
    (model) => !persistedIds.includes(model.id)
  ) as M[];

  return { deleted, created };
}
