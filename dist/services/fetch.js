import Service from '@ember/service';
import { g as getAdapterOrThrow } from '../get-adapter-or-throw-D7tm27RB.js';

class FetchService extends Service {
  /**
   * A regular fetch but with the application adapter scope
   * Throws when status code is >= 400
   */
  // eslint-disable-next-line no-undef
  async request(url, moreOptions = {}) {
    const adapter = getAdapterOrThrow(this);
    const res = await fetch(`${adapter.host}/${adapter.namespace}/${url}`, {
      headers: adapter.headers,
      ...moreOptions
    });
    if (res.status >= 400) {
      throw res;
    }
    return res;
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your services.

export { FetchService as default };
//# sourceMappingURL=fetch.js.map
