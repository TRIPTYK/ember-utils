/// <reference types="ember__service" />
import Service from '@ember/service';
declare class FetchService extends Service {
    /**
     * A regular fetch but with the application adapter scope
     * Throws when status code is >= 400
     */
    /**
     * A regular fetch but with the application adapter scope
     * Throws when status code is >= 400
     */
    // eslint-disable-next-line no-undef
    request(url: string, moreOptions?: RequestInit): Promise<Response>;
}
declare module '@ember/service' {
    interface Registry {
        fetch: FetchService;
    }
}
export { FetchService as default };
