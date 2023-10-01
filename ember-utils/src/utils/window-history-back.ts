import config from 'ember-get-config';

export default function windowHistoryBack() {
  if (config.environment !== 'test' && window) window.history.back();
}
