import { _ as _applyDecoratedDescriptor, a as _initializerDefineProperty } from '../applyDecoratedDescriptor-BDqkYiga.js';
import Service, { service } from '@ember/service';

var _class, _descriptor;
// eslint-disable-next-line ember/use-ember-data-rfc-395-imports
let ExtendedStoreService = (_class = class ExtendedStoreService extends Service {
  constructor(...args) {
    super(...args);
    _initializerDefineProperty(this, "store", _descriptor, this);
  }
  /**
   * Try to peek a record in the store, if it doesn't exist, create a new one.
   */
  peekOrCreateRecord(recordType, recordId) {
    if (!recordId) {
      return this.store.createRecord(recordType);
    }
    const record = this.store.peekRecord(recordType, recordId);
    if (record === null) {
      return this.store.createRecord(recordType);
    }
    return record;
  }
  peekOrFail(recordType, id) {
    const record = this.store.peekRecord(recordType, id);
    if (!record) {
      throw new Error(`Record ${recordType} with identifier ${id} not found in store`);
    }
    return record;
  }
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [service], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class);

export { ExtendedStoreService as default };
//# sourceMappingURL=extended-store.js.map
