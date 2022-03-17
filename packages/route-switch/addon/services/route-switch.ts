import Service from '@ember/service';
import Evented from '@ember/object/evented';
import { tracked } from '@glimmer/tracking';
import type Transition from '@ember/routing/-private/transition';

export default class RouteSwitch extends Service.extend(Evented) {
  @tracked isTrapped: boolean = false;
  @tracked transitionApproved?: boolean;
  escapeCondition?: () => boolean;

  private lastTransition?: Transition;

  approveLastTransition() {
    this.isTrapped = false;
    this.transitionApproved = true;
    this.lastTransition?.retry();
  }

  handleTransition(transition: Transition) {
    this.lastTransition = transition;
    if (this.escapeCondition?.() === false && !this.transitionApproved) {
      this.isTrapped = true;
      transition.abort();
      return;
    }
  }

  resetState() {
    this.transitionApproved = false;
    this.isTrapped = false;
    this.lastTransition = undefined;
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your services.
declare module '@ember/service' {
  // eslint-disable-next-line no-unused-vars
  interface Registry {
    'route-switcher': RouteSwitch;
  }
}
