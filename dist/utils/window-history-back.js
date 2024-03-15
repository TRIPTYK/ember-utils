import config from 'ember-get-config';

function windowHistoryBack() {
  if (config.environment !== 'test' && window) window.history.back();
}

export { windowHistoryBack as default };
//# sourceMappingURL=window-history-back.js.map
