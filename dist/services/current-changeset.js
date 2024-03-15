import { _ as _applyDecoratedDescriptor, a as _initializerDefineProperty } from '../applyDecoratedDescriptor-BDqkYiga.js';
import { action } from '@ember/object';
import Service, { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4;
let CurrentChangeset = (_class = class CurrentChangeset extends Service {
  constructor(props) {
    super(props);
    _initializerDefineProperty(this, "router", _descriptor, this);
    _initializerDefineProperty(this, "changeset", _descriptor2, this);
    _initializerDefineProperty(this, "waitingTransition", _descriptor3, this);
    _initializerDefineProperty(this, "approvalNeeded", _descriptor4, this);
    this.router.on('routeWillChange', this.checkTransition);
    this.router.on('routeDidChange', this.resetTransition);
  }
  resetTransition(transition) {
    if (transition.to?.name === transition.from?.name) {
      return;
    }
    this.approvalNeeded = false;
    this.changeset = undefined;
  }
  checkTransition(transition) {
    /**
     * Same route transition ? Don't block
     * Aproved ? Don't block
     */
    if (transition.to?.name === transition.from?.name || transition.data['approved']) {
      return;
    }
    if (this.changeset?.isDirty) {
      this.approvalNeeded = true;
      this.waitingTransition = transition;
      transition.abort();
    }
  }
  approveTransition() {
    this.approvalNeeded = false;
    /**
     * Need to set data otherwise it will be blocked again
     */
    this.waitingTransition.data['approved'] = true;
    this.waitingTransition?.retry();
  }
  denyTransition() {
    this.approvalNeeded = false;
    this.waitingTransition = undefined;
  }
  willDestroy() {
    this.router.off('routeWillChange', this.checkTransition);
    this.router.off('routeDidChange', this.resetTransition);
    super.willDestroy();
  }
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "router", [service], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "changeset", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "waitingTransition", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "approvalNeeded", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _applyDecoratedDescriptor(_class.prototype, "resetTransition", [action], Object.getOwnPropertyDescriptor(_class.prototype, "resetTransition"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "checkTransition", [action], Object.getOwnPropertyDescriptor(_class.prototype, "checkTransition"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "approveTransition", [action], Object.getOwnPropertyDescriptor(_class.prototype, "approveTransition"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "denyTransition", [action], Object.getOwnPropertyDescriptor(_class.prototype, "denyTransition"), _class.prototype)), _class);
 // DO NOT DELETE: this is how TypeScript knows how to look up your services.

export { CurrentChangeset as default };
//# sourceMappingURL=current-changeset.js.map
