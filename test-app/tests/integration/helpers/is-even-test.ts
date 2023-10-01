import { isEven } from '@triptyk/ember-utils/helpers/is-even';
import { module, test } from 'qunit';

module('Integration | Helper | is-even', function () {
  // Replace this with your real tests.
  test('it match', async function (assert) {
    assert.true(isEven([2]));
  });

  test('it does not match', async function (assert) {
    assert.false(isEven([3]));
  });
});
