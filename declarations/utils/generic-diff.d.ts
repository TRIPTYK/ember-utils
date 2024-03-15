import type Model from '@ember-data/model';
import type ArrayProxy from '@ember/array/proxy';
export default function genericDiff<T extends {
    id?: string;
}, M extends Model>(models: M[] | ArrayProxy<M>, array: T[]): {
    deleted: M[];
    left: T[];
};
//# sourceMappingURL=generic-diff.d.ts.map