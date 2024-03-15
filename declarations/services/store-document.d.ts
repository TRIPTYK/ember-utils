import type Model from '@ember-data/model';
import type emberData__store from '@ember-data/store';
import Service from '@ember/service';
import type FetchService from './fetch';
import type Owner from '@ember/owner';
export type FileObject = PersistedFile | UnpersistedFile;
export interface PersistedFile {
    filename: string;
    path: string;
    id: string;
}
export interface UnpersistedFile {
    filename: string;
    path?: string;
    id?: string;
    file?: File;
}
export default class StoreDocumentService extends Service {
    store: emberData__store;
    fetch: FetchService;
    private adapter;
    constructor(owner: Owner);
    /**
     * Updates or creates a record from a FormData.
     */
    save<T extends Model>(formData: FormData, endpoint: string): Promise<T>;
    create<T extends Model>(formData: FormData, resourceEndpoint: string): Promise<T>;
    update<T extends Model>(formData: FormData, resourceEndpoint: string, id: string): Promise<T>;
    protected createRequestObject(method: 'POST' | 'PATCH', formData: FormData): {
        method: "POST" | "PATCH";
        headers: {
            Accept: string;
            Authorization: string;
        };
        body: FormData;
    };
}
declare module '@ember/service' {
    interface Registry {
        'store-document': StoreDocumentService;
    }
}
//# sourceMappingURL=store-document.d.ts.map