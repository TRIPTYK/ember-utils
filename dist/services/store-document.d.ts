/// <reference types="ember__service" />
/// <reference types="ember-data" />
/// <reference types="ember__owner" />
import Model from '@ember-data/model';
import emberData__store from '@ember-data/store';
import Service from '@ember/service';
import FetchService from "./fetch.js";
import Owner from '@ember/owner';
type FileObject = PersistedFile | UnpersistedFile;
interface PersistedFile {
    filename: string;
    path: string;
    id: string;
}
interface UnpersistedFile {
    filename: string;
    path?: string;
    id?: string;
    file?: File;
}
declare class StoreDocumentService extends Service {
    store: emberData__store;
    fetch: FetchService;
    private adapter;
    constructor(owner: Owner);
    /**
     * Updates or creates a record from a FormData.
     */
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
export { FileObject, PersistedFile, UnpersistedFile, StoreDocumentService as default };
