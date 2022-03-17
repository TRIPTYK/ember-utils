/* eslint-disable @typescript-eslint/no-explicit-any */
import { getOwner } from '@ember/application';
import type ApplicationInstance from '@ember/application/instance';
import type Transition from '@ember/routing/-private/transition';
import { action } from '@ember/object';
import type RouteSwitch from '../services/route-switch';

export function RouteSwitchProtected<T extends { new (...args: any[]): any }>(
  constructor: T
): any {
  const klass = class extends constructor {
    declare routeSwitch: RouteSwitch;

    activate() {
      this.routeSwitch.isTrapped = false;
      super.activate?.();
    }

    deactivate() {
      this.routeSwitch.resetState();
      super.deactivate?.();
    }

    constructor(...args: any[]) {
      super(...args);
      this.routeSwitch = (getOwner(this) as ApplicationInstance).lookup(
        'service:route-switch'
      ) as RouteSwitch;
    }

    willTransition(transition: Transition<unknown>): void {
      super.willTransition?.(transition);
      this.routeSwitch.handleTransition(transition);
    }
  };

  const descWill = Object.getOwnPropertyDescriptor(
    klass.prototype,
    'willTransition'
  );

  action(klass.prototype, 'willTransition', descWill!);
  return klass;
}
