import { module, test } from 'qunit';
import { translateCountry } from '@triptyk/ember-utils/helpers/translate-country';

module('Integration | Helper | translate-country', function () {
  test('should translate array of code', async function (assert) {
    const countries = ['BE', 'FR'];
    assert.strictEqual(
      JSON.stringify(translateCountry([countries])),
      JSON.stringify(['Belgique', 'France'])
    );
  });
  test('should translate one code', async function (assert) {
    assert.strictEqual(translateCountry(['BE']), 'Belgique');
  });
});
