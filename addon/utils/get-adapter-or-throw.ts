import { getOwner } from '@ember/application';
import type Adapter from '@ember-data/adapter/rest';

export function getAdapterOrThrow(owner: unknown) {
  const adapter = getOwner(owner)?.lookup('adapter:application') as Adapter;
  if (!adapter) {
    throw new Error('Please create an adapter:application');
  }
  return adapter;
}
