import Service from '@ember/service';
export default class FetchService extends Service {
    /**
     * A regular fetch but with the application adapter scope
     * Throws when status code is >= 400
     */
    request(url: string, moreOptions?: RequestInit): Promise<Response>;
}
declare module '@ember/service' {
    interface Registry {
        fetch: FetchService;
    }
}
//# sourceMappingURL=fetch.d.ts.map