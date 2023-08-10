import type Store from '@ember-data/store';
import { ensureModelProperties } from '@triptyk/ember-utils/utils/ensure-model-properties';
import Foo from 'dummy/models/foo';
import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Utils | ensure-model-properties', function (hooks) {
  setupTest(hooks);
  let store: Store;

  hooks.beforeEach(function () {
    store = this.owner.lookup('service:store');
  });

  test('it rejects when a model fails attribute property check', function (assert) {
    const patient = store.createRecord('foo', {
      lastname: 'John',
    });

    assert.throws(
      () => ensureModelProperties(patient, Foo, ['commitmentDate']),
      /Error: Missing foo attribute property in model: commitmentDate/
    );
  });

  test('it rejects when a model fails relationship property check', function (assert) {
    const patient = store.createRecord('foo', {
      lastname: 'John',
    });

    assert.throws(
      () => ensureModelProperties(patient, Foo, ['patientDocuments']),
      /Error: Missing foo relationship property in model: patientDocuments/
    );
  });
});
