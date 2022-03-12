import Service from '@ember/service';
import type Transition from '@ember/routing/-private/transition';
import { tracked } from '@glimmer/tracking';
import Evented from '@ember/object/evented';

export default class RouteSwitch extends Service.extend(Evented) {
  @tracked abordedTransition?: Transition<unknown>;
  @tracked locked?: boolean;

  approveTransition() {
    this.locked = false;
    this.abordedTransition?.retry();
    this.abordedTransition = undefined;
  }

  abordTransition(tr: Transition<unknown>) {
    tr.abort();
    this.abordedTransition = tr;
    this.trigger('transitionAborded', this.abordedTransition);
  }

  resetTransition() {
    this.locked = true;
    this.abordedTransition = undefined;
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your services.
declare module '@ember/service' {
  // eslint-disable-next-line no-unused-vars
  interface Registry {
    'route-switcher': RouteSwitch;
  }
}
