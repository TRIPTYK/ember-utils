import type emberData__store from '@ember-data/store';
import Service, { service } from '@ember/service';
// eslint-disable-next-line ember/use-ember-data-rfc-395-imports
import type ModelRegistry from 'ember-data/types/registries/model';

export default class ExtendedStoreService extends Service {
  @service declare store: emberData__store;

  /**
   * Try to peek a record in the store, if it doesn't exist, create a new one.
   */
  public peekOrCreateRecord<K extends keyof ModelRegistry>(
    recordType: K,
    recordId: string | undefined,
  ): ModelRegistry[K] {
    if (!recordId) {
      return this.store.createRecord(recordType);
    }

    const record = this.store.peekRecord(recordType, recordId);

    if (record === null) {
      return this.store.createRecord(recordType);
    }

    return record;
  }

  public peekOrFail<K extends keyof ModelRegistry>(
    recordType: K,
    id: string,
  ): ModelRegistry[K] {
    const record = this.store.peekRecord(recordType, id);
    if (!record) {
      throw new Error(
        `Record ${recordType} with identifier ${id} not found in store`,
      );
    }
    return record;
  }
}

declare module '@ember/service' {
  interface Registry {
    'extended-store': ExtendedStoreService;
  }
}
