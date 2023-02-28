import type emberData__model from '@ember-data/model';
import type emberData__store from '@ember-data/store';
import Service, { service } from '@ember/service';
// eslint-disable-next-line ember/use-ember-data-rfc-395-imports
import type ModelRegistry from 'ember-data/types/registries/model';

export default class ExtendedStoreService extends Service {
  @service declare store: emberData__store;

  public peekOrCreateRecord<K extends keyof ModelRegistry>(
    recordType: K,
    recordId: string | undefined
  ) {
    return recordId
      ? this.store.peekRecord(recordType, recordId)
      : this.store.createRecord(recordType);
  }

  public peekOrFail<K extends keyof ModelRegistry>(
    recordType: K,
    recordOrId: string | ModelRegistry[K]
  ) {
    const record =
      typeof recordOrId === 'string'
        ? this.store.peekRecord(recordType, recordOrId)
        : recordOrId;

    if (!record) {
      throw new Error(
        `Record ${recordType} with identifier ${recordOrId} not found in store`
      );
    }

    return record;
  }
}
