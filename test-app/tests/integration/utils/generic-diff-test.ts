import { module, test } from 'qunit';
import genericDiff from '@triptyk/ember-utils/utils/generic-diff';
import { setupTest } from 'ember-qunit';

module('Integration | Util | generic-diff', function (hooks) {
  setupTest(hooks);

  test('should return deleted and created object', async function (assert) {
    const store = this.owner.lookup('service:store');

    const modelsData = [
      store.createRecord('company', {
        id: '1',
        name: 'deleted',
      }),
      store.createRecord('company', {
        id: '2',
        name: 'persist',
      }),
    ];

    const arrayData = [
      {
        id: '2',
        name: 'persist',
      },
      {
        id: undefined,
        name: 'created',
      },
    ];

    const { left, deleted } = genericDiff(modelsData, arrayData);

    assert.deepEqual(left, [
      {
        id: undefined,
        name: 'created',
      },
    ]);
    assert.deepEqual(deleted, [modelsData[0]]);
  });
});
