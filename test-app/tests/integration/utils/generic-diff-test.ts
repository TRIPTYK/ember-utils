import { module, test } from 'qunit';
import genericDiff from '@triptyk/ember-utils/utils/generic-diff';

module('Integration | Util | generic-diff', function () {
  test('should return deleted and created object', async function (assert) {
    const modelsData = [
      {
        id: '1',
        name: 'deleted',
      },
      {
        id: '2',
        name: 'persist',
      },
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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { created, deleted } = genericDiff(modelsData as any, arrayData);
    assert.strictEqual(
      JSON.stringify(created),
      JSON.stringify([{ name: 'created' }]),
    );
    assert.strictEqual(
      JSON.stringify(deleted),
      JSON.stringify([
        {
          id: '1',
          name: 'deleted',
        },
      ]),
    );
  });
});
