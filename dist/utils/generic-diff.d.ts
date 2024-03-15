/// <reference types="ember-data" />
/// <reference types="ember__array" />
import Model from '@ember-data/model';
import ArrayProxy from '@ember/array/proxy';
declare function genericDiff<T extends {
    id?: string;
}, M extends Model>(models: M[] | ArrayProxy<M>, array: T[]): {
    deleted: M[];
    left: T[];
};
export { genericDiff as default };
