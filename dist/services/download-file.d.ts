/// <reference types="ember__service" />
import Service from '@ember/service';
import { OptionalParams } from 'js-file-downloader';
interface DownloadFileParameters {
    path: string;
    filename: string;
}
interface DownloadFileService {
    downloadFile(file: DownloadFileParameters, options?: OptionalParams): Promise<void>;
}
declare class DownloadFileServiceImpl extends Service implements DownloadFileService {
    private adapter;
    constructor(props?: object);
    downloadFile(file: DownloadFileParameters, options: OptionalParams): Promise<void>;
}
declare module '@ember/service' {
    interface Registry {
        'download-file': DownloadFileServiceImpl;
    }
}
export { DownloadFileService, DownloadFileServiceImpl as default };
