import Service from '@ember/service';
import type Transition from '@ember/routing/-private/transition';
import { tracked } from '@glimmer/tracking';
import Evented from '@ember/object/evented';

type Listener = (tr: Transition) => boolean;

export default class RouteSwitch extends Service.extend(Evented) {
  @tracked abordedTransition?: Transition<unknown>;
  @tracked locked: boolean = false;

  private _listener?: Listener;

  set listener(value: Listener) {
    this._listener = value;
  }

  approveTransition() {
    this.locked = false;
    this.abordedTransition?.retry();
    this.abordedTransition = undefined;
  }

  abordTransition(tr: Transition<unknown>) {
    tr.abort();
    this.abordedTransition = tr;
    // User will handle
    if (this._listener?.(this.abordedTransition) === true) {
      this.approveTransition();
      return;
    }
  }

  reset() {
    this._listener = undefined;
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
