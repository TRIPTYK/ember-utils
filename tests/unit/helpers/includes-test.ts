import { includes } from '@triptyk/ember-utils/helpers/includes';
import { module, test } from 'qunit';

module('Integration | Helper | includes', function () {
  // Replace this with your real tests.
  test('it match', async function (assert) {
    assert.true(includes([['1', '2'], '1']));
  });

  test('it does not match', async function (assert) {
    assert.false(includes([['1', '2', '3'], '4']));
  });
});
