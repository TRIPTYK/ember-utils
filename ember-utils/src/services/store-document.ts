import type Model from '@ember-data/model';
import type emberData__store from '@ember-data/store';
import Service, { service } from '@ember/service';
import type JSONAPIAdapter from '@ember-data/adapter/json-api';
import getAdapterOrThrow from '../utils/get-adapter-or-throw';
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
  @service declare store: emberData__store;
  @service declare fetch: FetchService;

  private adapter: JSONAPIAdapter;

  public constructor(owner: Owner) {
    super(owner);
    this.adapter = getAdapterOrThrow(this);
  }

  /**
   * Updates or creates a record from a FormData.
   */
  public async save<T extends Model>(formData: FormData, endpoint: string) {
    const id = formData.get('id');
    if (id) {
      return this.update<T>(formData, endpoint, id.toString());
    }
    return this.create<T>(formData, endpoint);
  }

  public async create<T extends Model>(
    formData: FormData,
    resourceEndpoint: string,
  ): Promise<T> {
    const response = await this.fetch.request(
      `${resourceEndpoint}`,
      this.createRequestObject('POST', formData),
    );
    const data = await response.json();
    return this.store.pushPayload(data) as T;
  }

  public async update<T extends Model>(
    formData: FormData,
    resourceEndpoint: string,
    id: string,
  ): Promise<T> {
    const response = await this.fetch.request(
      `${resourceEndpoint}/${id}`,
      this.createRequestObject('PATCH', formData),
    );
    const data = await response.json();
    return this.store.pushPayload(data) as T;
  }

  protected createRequestObject(method: 'POST' | 'PATCH', formData: FormData) {
    return {
      method,
      headers: {
        Accept: 'application/vnd.api+json',
        Authorization:
          (this.adapter.headers as Record<string, string>)['Authorization'] ??
          '',
      },
      body: formData,
    };
  }
}

declare module '@ember/service' {
  interface Registry {
    'store-document': StoreDocumentService;
  }
}
