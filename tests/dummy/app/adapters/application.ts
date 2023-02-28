import Adapter from '@ember-data/adapter/json-api';

export default class Application extends Adapter {
  host = 'http://localhost:8080';
  namespace = 'api/v1';
}

// DO NOT DELETE: this is how TypeScript knows how to look up your adapters.
declare module 'ember-data/types/registries/adapter' {
  export default interface AdapterRegistry {
    application: Application;
  }
}
