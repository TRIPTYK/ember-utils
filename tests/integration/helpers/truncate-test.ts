import { truncate } from '@triptyk/ember-utils/helpers/truncate';
import { module, test } from 'qunit';

module('Integration | Helper | truncate', function () {
  test('return value with sanitize and truncate', async function (assert) {
    const text =
      'Triptyk est un consulat de développeur que crée des outils effectuant des machinations';
    const html = `<p>${text}</p>`;
    const size = 10;

    const words = text
      .trim()
      .split(' ')
      .filter((str: string) => str !== '');

    assert.strictEqual(
      truncate([html, size]),
      `${words.slice(0, size).join(' ')}...`
    );
  });
});
