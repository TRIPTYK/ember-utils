import Service from '@ember/service';
import Evented from '@ember/object/evented';
import { tracked } from '@glimmer/tracking';
import type Transition from '@ember/routing/-private/transition';

export default class RouteSwitch extends Service.extend(Evented) {
  @tracked isTrapped: boolean = false;
  @tracked isLastTransitionApproved?: boolean;
  @tracked lastTransition?: Transition;

  escapeCondition?: () => boolean;

  approveLastTransition() {
    this.isTrapped = false;
    this.isLastTransitionApproved = true;
    this.lastTransition?.retry();
  }

  denyLastTransition() {
    this.isLastTransitionApproved = false;
  }

  handleTransition(transition: Transition) {
    // New trans, reset approval
    this.lastTransition = transition;
    if (this.escapeCondition?.() === false && !this.isLastTransitionApproved) {
      this.isTrapped = true;
      this.isLastTransitionApproved = undefined;
      transition.abort();
      return;
    }
  }

  resetState() {
    this.isLastTransitionApproved = undefined;
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
