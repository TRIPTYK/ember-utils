import Service from '@ember/service';
import type Adapter from '@ember-data/adapter/rest';
import type { OptionalParams } from 'js-file-downloader';
import config from 'ember-get-config';
import JsFileDownloader from 'js-file-downloader';
import getAdapterOrThrow from '../utils/get-adapter-or-throw';

interface DownloadFileParameters {
  path: string;
  filename: string;
}

export interface DownloadFileService {
  downloadFile(
    file: DownloadFileParameters,
    options?: OptionalParams,
  ): Promise<void>;
}

export default class DownloadFileServiceImpl
  extends Service
  implements DownloadFileService
{
  private adapter: Adapter;

  public constructor(props?: object) {
    super(props);
    this.adapter = getAdapterOrThrow(this);
  }

  async downloadFile(file: DownloadFileParameters, options: OptionalParams) {
    if (config.environment === 'test') return;

    return new JsFileDownloader({
      ...options,
      url: `${this.adapter.host}/${file.path}`,
      filename: `${file.filename}`,
      headers: [
        {
          name: 'Authorization',
          value:
            (this.adapter.headers as Record<string, string>)['Authorization'] ??
            '',
        },
      ],
    });
  }
}

declare module '@ember/service' {
  interface Registry {
    'download-file': DownloadFileServiceImpl;
  }
}
