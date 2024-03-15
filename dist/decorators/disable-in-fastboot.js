import { assert } from '@ember/debug';
import { getOwner } from '@ember/application';

function disableInFastboot(_target, _propertyKey, desc) {
  const orig = desc.value;
  assert('The @isFasboot decorator must be applied to methods', typeof orig === 'function');
  desc.value = function (...args) {
    const owner = getOwner(this);
    assert('You must have an owner in isFastboot decorator', !!owner);
    const fastboot = owner.lookup('service:fastboot');
    if (fastboot.isFastBoot) {
      return;
    }
    return orig.apply(this, args);
  };
}

export { disableInFastboot as default };
//# sourceMappingURL=disable-in-fastboot.js.map
