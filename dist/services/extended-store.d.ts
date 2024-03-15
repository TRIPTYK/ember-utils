/// <reference types="ember__service" />
/// <reference types="ember-data" />
import emberData__store from '@ember-data/store';
import Service from '@ember/service';
import ModelRegistry from 'ember-data/types/registries/model';
declare class ExtendedStoreService extends Service {
    store: emberData__store;
    /**
     * Try to peek a record in the store, if it doesn't exist, create a new one.
     */
    /**
     * Try to peek a record in the store, if it doesn't exist, create a new one.
     */
    peekOrCreateRecord<K extends keyof ModelRegistry>(recordType: K, recordId: string | undefined): ModelRegistry[K];
    peekOrFail<K extends keyof ModelRegistry>(recordType: K, id: string): ModelRegistry[K];
}
declare module '@ember/service' {
    interface Registry {
        'extended-store': ExtendedStoreService;
    }
}
export { ExtendedStoreService as default };
