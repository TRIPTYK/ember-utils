import { action } from '@ember/object';
import BaseForm from 'ember-form-changeset-validations/components/form';
import type { BaseFormArgs } from 'ember-form-changeset-validations/components/form';

export interface FormsArticleDTO {}

interface FormsArticleArgs extends BaseFormArgs<FormsArticleDTO> {}

export default class FormsArticle extends BaseForm<FormsArticleArgs> {
  constructor(owner: unknown, args: FormsArticleArgs) {
    super(owner, args);
  }

  @action
  updateValue(field: keyof FormsArticleDTO, e: InputEvent) {
    e.preventDefault();
    const target = e.target as HTMLInputElement;
    this.args.changeset.set(
      field,
      target.type === 'checkbox' ? target.checked : target.value
    );
  }
}
