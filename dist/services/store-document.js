import { _ as _applyDecoratedDescriptor, a as _initializerDefineProperty } from '../applyDecoratedDescriptor-BDqkYiga.js';
import { _ as _defineProperty } from '../defineProperty-adqVGLuc.js';
import Service, { service } from '@ember/service';
import { g as getAdapterOrThrow } from '../get-adapter-or-throw-D7tm27RB.js';

var _class, _descriptor, _descriptor2;
let StoreDocumentService = (_class = class StoreDocumentService extends Service {
  constructor(owner) {
    super(owner);
    _initializerDefineProperty(this, "store", _descriptor, this);
    _initializerDefineProperty(this, "fetch", _descriptor2, this);
    _defineProperty(this, "adapter", void 0);
    this.adapter = getAdapterOrThrow(this);
  }

  /**
   * Updates or creates a record from a FormData.
   */
  async save(formData, endpoint) {
    const id = formData.get('id');
    if (id) {
      return this.update(formData, endpoint, id.toString());
    }
    return this.create(formData, endpoint);
  }
  async create(formData, resourceEndpoint) {
    const response = await this.fetch.request(`${resourceEndpoint}`, this.createRequestObject('POST', formData));
    const data = await response.json();
    return this.store.pushPayload(data);
  }
  async update(formData, resourceEndpoint, id) {
    const response = await this.fetch.request(`${resourceEndpoint}/${id}`, this.createRequestObject('PATCH', formData));
    const data = await response.json();
    return this.store.pushPayload(data);
  }
  createRequestObject(method, formData) {
    return {
      method,
      headers: {
        Accept: 'application/vnd.api+json',
        Authorization: this.adapter.headers['Authorization'] ?? ''
      },
      body: formData
    };
  }
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [service], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "fetch", [service], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class);

export { StoreDocumentService as default };
//# sourceMappingURL=store-document.js.map
