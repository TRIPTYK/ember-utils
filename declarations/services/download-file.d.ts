import Service from '@ember/service';
import type { OptionalParams } from 'js-file-downloader';
interface DownloadFileParameters {
    path: string;
    filename: string;
}
export interface DownloadFileService {
    downloadFile(file: DownloadFileParameters, options?: OptionalParams): Promise<void>;
}
export default class DownloadFileServiceImpl extends Service implements DownloadFileService {
    private adapter;
    constructor(props?: object);
    downloadFile(file: DownloadFileParameters, options: OptionalParams): Promise<void>;
}
declare module '@ember/service' {
    interface Registry {
        'download-file': DownloadFileServiceImpl;
    }
}
export {};
//# sourceMappingURL=download-file.d.ts.map