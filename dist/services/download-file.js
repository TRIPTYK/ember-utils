import { _ as _defineProperty } from '../defineProperty-adqVGLuc.js';
import Service from '@ember/service';
import config from 'ember-get-config';
import JsFileDownloader from 'js-file-downloader';
import { g as getAdapterOrThrow } from '../get-adapter-or-throw-D7tm27RB.js';

class DownloadFileServiceImpl extends Service {
  constructor(props) {
    super(props);
    _defineProperty(this, "adapter", void 0);
    this.adapter = getAdapterOrThrow(this);
  }
  async downloadFile(file, options) {
    if (config.environment === 'test') return;
    return new JsFileDownloader({
      ...options,
      url: `${this.adapter.host}/${file.path}`,
      filename: `${file.filename}`,
      headers: [{
        name: 'Authorization',
        value: this.adapter.headers['Authorization'] ?? ''
      }]
    });
  }
}

export { DownloadFileServiceImpl as default };
//# sourceMappingURL=download-file.js.map
