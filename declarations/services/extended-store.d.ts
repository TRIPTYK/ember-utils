import type emberData__store from '@ember-data/store';
import Service from '@ember/service';
import type ModelRegistry from 'ember-data/types/registries/model';
export default class ExtendedStoreService extends Service {
    store: emberData__store;
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
//# sourceMappingURL=extended-store.d.ts.map