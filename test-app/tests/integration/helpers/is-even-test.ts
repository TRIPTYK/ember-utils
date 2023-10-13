import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Integration | Helper | is-even', function (hooks) {
  setupRenderingTest(hooks);

  test('it match', async function (assert) {
    await render(hbs`
      {{is-even 1}}
    `);
    assert.dom().hasText('false');
  });

  test('it does not match', async function (assert) {
    await render(hbs`
      {{is-even 2}}
    `);
    assert.dom().hasText('true');
  });
});
