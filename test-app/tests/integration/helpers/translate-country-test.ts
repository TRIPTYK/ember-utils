import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { TestContext, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | translate-country', function (hooks) {
  setupRenderingTest(hooks);

  function setCountries(
    this: TestContext,
    countries: string[] | string,
    language?: string,
  ) {
    this.set('countries', countries);
    this.set('language', language);
    return countries;
  }

  async function renderHelper() {
    await render(hbs`
        {{translate-country this.countries this.language}}
      `);
  }

  test('should translate array of code', async function (assert) {
    setCountries.call(this, ['BE', 'FR']);
    await renderHelper();
    assert.dom().hasText('Belgique,France');
  });
  test('should translate one code', async function (assert) {
    setCountries.call(this, 'BE');
    await renderHelper();
    assert.dom().hasText('Belgique');
  });

  test('should translate one code in english', async function (assert) {
    setCountries.call(this, 'BE', 'en');
    await renderHelper();
    assert.dom().hasText('Belgium');
  });
});
