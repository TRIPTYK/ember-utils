/* eslint-disable @typescript-eslint/consistent-type-imports */
import Model, { attr } from '@ember-data/model';

export default class Company extends Model {
  @attr('date') declare commitmentDate?: Date | null;
  @attr('string') declare site?: string;
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    company: Company;
  }
}
