import AddonDocsRouter, { docsRoute } from 'ember-cli-addon-docs/router';
import config from './config/environment';

const Router = AddonDocsRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function () {
  docsRoute(this, function () {
    this.route('decorators', function () {
      this.route('disable-in-fastboot');
    });
    this.route('helpers', function () {
      this.route('date-format');
      this.route('html-safe');
      this.route('includes');
      this.route('is-even');
      this.route('translate-country');
      this.route('truncate');
    });
    this.route('services', function () {
      this.route('current-changeset');
      this.route('current-transition');
      this.route('download-file');
      this.route('extended-store');
      this.route('store-document');
    });
    this.route('utils', function () {
      this.route('ensure-model-properties');
      this.route('file-to-form-data');
      this.route('generic-diff');
      this.route('sanitize-string');
      this.route('to');
      this.route('window-history-back');
    });
  });
  this.route('docs');
});

export default Router;
