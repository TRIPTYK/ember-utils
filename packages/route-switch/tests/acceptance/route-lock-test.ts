import { module, test } from 'qunit';
import { currentURL, fillIn, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | route lock', function (hooks) {
  setupApplicationTest(hooks);
  test('visiting /route-lock', async function (assert) {
    await visit('/');
    assert.strictEqual(currentURL(), '/', 'can switch to index');
    await visit('/articles');
    assert.strictEqual(currentURL(), '/articles', 'can switch to articles');
    await visit('/posts');
    assert.strictEqual(currentURL(), '/posts', 'can switch to posts');
    await visit('/articles');
    assert.strictEqual(currentURL(), '/articles', 'can switch to articles');

    await fillIn('input#name', 'aaaa');

    assert.rejects(visit('/'), "Can't leave the route, transition is aborded");
  });
});
