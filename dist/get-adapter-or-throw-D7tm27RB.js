import { getOwner } from '@ember/application';

function getAdapterOrThrow(owner) {
  const adapter = getOwner(owner)?.lookup('adapter:application');
  if (!adapter) {
    throw new Error('Please create an adapter:application');
  }
  return adapter;
}

export { getAdapterOrThrow as g };
//# sourceMappingURL=get-adapter-or-throw-D7tm27RB.js.map
