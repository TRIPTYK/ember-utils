export interface Relation {
  ressourceName: string;
  fieldName: string;
  id: string;
}

export default function fileToFormData(file: File, relations: Relation[]) {
  const formDataHelper = new FormDataHelper(file);
  formDataHelper.appendRelations(relations);
  return formDataHelper.formData;
}

export class FormDataHelper {
  public declare formData: FormData;
  private relationObject: Record<string, unknown> = {};
  constructor(file: File) {
    this.formData = new FormData();
    this.formData.append('file', file);
  }

  public appendRelations(relations: Relation[]) {
    for (const relation of relations) {
      this.appendRelation(relation);
    }
    this.buildRelations();
  }

  public addFileId(id: string) {
    this.formData.append('id', id);
  }
  public buildRelations() {
    const dataObject = {
      attributes: {},
      relationships: this.relationObject,
    };
    this.formData.append('data', JSON.stringify(dataObject));
  }

  private appendRelation(relation: Relation) {
    this.relationObject[relation.fieldName] = {
      data: {
        type: relation.ressourceName,
        id: relation.id,
      },
    };
  }
}
