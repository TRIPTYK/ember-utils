import Model, {
  SyncHasMany,
  attr,
  belongsTo,
  hasMany,
} from '@ember-data/model';
import Company from './company';

export default class Foo extends Model {
  @attr('date') declare commitmentDate?: Date | null;
  @attr('string') declare site?: string;

  @belongsTo('company', {
    async: false,
  })
  declare company: Company;

  @hasMany('company', {
    async: false,
  })
  declare patientDocuments: SyncHasMany<Company>;
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    foo: Foo;
  }
}
