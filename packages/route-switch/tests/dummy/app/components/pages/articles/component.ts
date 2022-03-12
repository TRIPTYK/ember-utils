import { inject } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import type RouteSwitch from 'route-switch/services/route-switch';
import { Changeset } from 'ember-changeset';
import type { TypedBufferedChangeset } from 'ember-form-changeset-validations/components/typed-changeset';

interface PagesArticlesArgs {}

export default class PagesArticles extends Component<PagesArticlesArgs> {
  @inject declare routeSwitch: RouteSwitch;
  @tracked changeset: TypedBufferedChangeset;

  transitionAborded = () => {
    if (this.changeset.isPristine) {
      this.routeSwitch.approveTransition();
    }
  };

  constructor(owner: unknown, args: PagesArticlesArgs) {
    super(owner, args);
    this.changeset = Changeset({
      name: '',
    }) as TypedBufferedChangeset;
    this.routeSwitch.on('transitionAborded', this.transitionAborded);
  }

  willDestroy(): void {
    super.willDestroy();
    this.routeSwitch.off('transitionAborded', this.transitionAborded);
  }
}
