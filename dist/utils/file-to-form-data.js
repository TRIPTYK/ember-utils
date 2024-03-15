import { _ as _defineProperty } from '../defineProperty-adqVGLuc.js';

function fileToFormData(file, relations) {
  const formDataHelper = new FormDataHelper(file);
  formDataHelper.appendRelations(relations);
  return formDataHelper.formData;
}
class FormDataHelper {
  constructor(file) {
    _defineProperty(this, "relationObject", {});
    this.formData = new FormData();
    this.formData.append('file', file);
  }
  appendRelations(relations) {
    for (const relation of relations) {
      this.appendRelation(relation);
    }
    this.buildRelations();
  }
  addFileId(id) {
    this.formData.append('id', id);
  }
  buildRelations() {
    const dataObject = {
      attributes: {},
      relationships: this.relationObject
    };
    this.formData.append('data', JSON.stringify(dataObject));
  }
  appendRelation(relation) {
    this.relationObject[relation.fieldName] = {
      data: {
        type: relation.ressourceName,
        id: relation.id
      }
    };
  }
}

export { FormDataHelper, fileToFormData as default };
//# sourceMappingURL=file-to-form-data.js.map
