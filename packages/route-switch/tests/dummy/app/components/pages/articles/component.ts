import { action } from '@ember/object';
import { inject } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import type RouteSwitch from '@triptyk/ember-route-switch/services/route-switch';
import { Changeset } from 'ember-changeset';
import type { TypedBufferedChangeset } from 'ember-form-changeset-validations/components/typed-changeset';

interface PagesArticlesArgs {}

export default class PagesArticles extends Component<PagesArticlesArgs> {
  @inject declare routeSwitch: RouteSwitch;
  @tracked changeset: TypedBufferedChangeset;
  @tracked approved?: boolean;

  @action approve() {
    this.routeSwitch.approveLastTransition();
  }

  @action deny() {
    this.routeSwitch.denyLastTransition();
  }

  get isModalOpened() {
    return (
      this.routeSwitch.isLastTransitionApproved === undefined &&
      this.routeSwitch.isTrapped
    );
  }

  constructor(owner: unknown, args: PagesArticlesArgs) {
    super(owner, args);
    this.changeset = Changeset({
      name: '',
    }) as TypedBufferedChangeset;
    this.routeSwitch.escapeCondition = () => this.changeset.isPristine;
  }
}
