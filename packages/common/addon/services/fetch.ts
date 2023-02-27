import Service from '@ember/service';
import { getOwner } from '@ember/application';
import fetch from 'fetch';
import type Adapter from '@ember-data/adapter/rest';

export default class FetchService extends Service {
  /**
   * A regular fetch but with the application adapter scope
   * Throws when status code is >= 400
   */
  async request(url: string, moreOptions: Record<string, unknown> = {}) {
    const adapter = this.getAdapterOrThrow();

    const res = await fetch(`${adapter.host}/${adapter.namespace}/${url}`, {
      headers: adapter.headers,
      ...moreOptions,
    });

    if (res.status >= 400) {
      throw res;
    }

    return res;
  }

  private getAdapterOrThrow() {
    const adapter = getOwner(this).lookup('adapter:application') as Adapter;
    if (!adapter) {
      throw new Error('Please create an adapter:application');
    }
    return adapter;
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your services.
declare module '@ember/service' {
  interface Registry {
    fetch: FetchService;
  }
}
