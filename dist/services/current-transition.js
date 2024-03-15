import { _ as _applyDecoratedDescriptor, a as _initializerDefineProperty } from '../applyDecoratedDescriptor-BDqkYiga.js';
import { action } from '@ember/object';
import Service, { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

var _class, _descriptor, _descriptor2;
let CurrentTransitionService = (_class = class CurrentTransitionService extends Service {
  constructor(...args) {
    super(...args);
    _initializerDefineProperty(this, "currentTransition", _descriptor, this);
    _initializerDefineProperty(this, "router", _descriptor2, this);
  }
  setCurrentTransition(t) {
    this.currentTransition = t;
  }
  goBack(route) {
    if (!this.currentTransition?.from?.name) {
      this.router.transitionTo(route);
      return;
    }
    this.router.transitionTo(this.currentTransition.from.name,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...Object.values(this.currentTransition.from.params), {
      queryParams: this.currentTransition.from.queryParams
    });
  }
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "currentTransition", [tracked], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "router", [service], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _applyDecoratedDescriptor(_class.prototype, "setCurrentTransition", [action], Object.getOwnPropertyDescriptor(_class.prototype, "setCurrentTransition"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "goBack", [action], Object.getOwnPropertyDescriptor(_class.prototype, "goBack"), _class.prototype)), _class);

export { CurrentTransitionService as default };
//# sourceMappingURL=current-transition.js.map
