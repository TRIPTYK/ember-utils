interface Relation {
    ressourceName: string;
    fieldName: string;
    id: string;
}
declare function fileToFormData(file: File, relations: Relation[]): FormData;
declare class FormDataHelper {
    formData: FormData;
    private relationObject;
    constructor(file: File);
    appendRelations(relations: Relation[]): void;
    addFileId(id: string): void;
    buildRelations(): void;
    private appendRelation;
}
export { Relation, fileToFormData as default, FormDataHelper };
