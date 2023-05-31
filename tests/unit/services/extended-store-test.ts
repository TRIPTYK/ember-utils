import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import type ExtendedStoreService from '@triptyk/ember-utils/services/extended-store';
import Model from '@ember-data/model';
import type Store from '@ember-data/store';
import type { TestContext } from '@ember/test-helpers';

module('Unit | Service | extended-store', function (hooks) {
  setupTest(hooks);

  function pushInStore(this: TestContext) {
    let store: Store = this.owner.lookup('service:store');

    store.pushPayload({
      data: {
        id: 'bar',
        type: 'foo',
        attributes: {},
      },
    });
  }

  let service: ExtendedStoreService;

  hooks.beforeEach(function () {
    service = this.owner.lookup(
      'service:extended-store'
    ) as ExtendedStoreService;
  });

  // Replace this with your real tests.
  test('returns a new record when does not exists in store', function (assert) {
    const record = service.peekOrCreateRecord('foo', 'bar');

    assert.true(record instanceof Model);
    assert.true(record.isNew);
  });

  test('returns a new record when id is undefined', function (assert) {
    const record = service.peekOrCreateRecord('foo', undefined);

    assert.true(record instanceof Model);
    assert.true(record.isNew);
  });

  test('returns an existing record when already in store', function (assert) {
    pushInStore.call(this);

    const record = service.peekOrCreateRecord('foo', 'bar');

    assert.true(record instanceof Model);
    assert.false(record.isNew);
  });

  test('peekOrFail throws when not in store', function (assert) {
    assert.throws(() => service.peekOrFail('foo', 'bar'));
  });

  test('peekOrFail succeeds when in store', function (assert) {
    pushInStore.call(this);
    assert.strictEqual(service.peekOrFail('foo', 'bar').id, 'bar');
  });
});
