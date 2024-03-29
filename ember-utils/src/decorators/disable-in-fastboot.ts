import { assert } from '@ember/debug';
import { getOwner } from '@ember/application';

export default function disableInFastboot(
  _target: object,
  _propertyKey: string | symbol,
  desc: PropertyDescriptor,
): void {
  const orig = desc.value;
  assert(
    'The @isFasboot decorator must be applied to methods',
    typeof orig === 'function',
  );

  desc.value = function (...args: unknown[]) {
    const owner = getOwner(this);
    assert('You must have an owner in isFastboot decorator', !!owner);

    const fastboot = owner.lookup('service:fastboot') as unknown as {
      isFastBoot: boolean;
    };

    if (fastboot.isFastBoot) {
      return;
    }

    return orig.apply(this, args);
  };
}
