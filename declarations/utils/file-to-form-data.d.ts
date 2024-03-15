export interface Relation {
    ressourceName: string;
    fieldName: string;
    id: string;
}
export default function fileToFormData(file: File, relations: Relation[]): FormData;
export declare class FormDataHelper {
    formData: FormData;
    private relationObject;
    constructor(file: File);
    appendRelations(relations: Relation[]): void;
    addFileId(id: string): void;
    buildRelations(): void;
    private appendRelation;
}
//# sourceMappingURL=file-to-form-data.d.ts.map