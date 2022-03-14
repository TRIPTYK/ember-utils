/* eslint-disable @typescript-eslint/no-explicit-any */
import { getOwner } from '@ember/application';
import type ApplicationInstance from '@ember/application/instance';
import type { Route } from '@ember/routing';
import type Transition from '@ember/routing/-private/transition';
import { action } from '@ember/object';
import type RouteSwitch from '../services/route-switch';

export function RouteSwitchProtected<T extends { new (...args: any[]): Route }>(
  constructor: T
): any {
  const klass = class extends constructor {
    declare routeSwitch: RouteSwitch;

    didTransition(): void {
      super.didTransition?.();
      this.routeSwitch.reset();
    }

    constructor(...args: any[]) {
      super(...args);
      this.routeSwitch = (getOwner(this) as ApplicationInstance).lookup(
        'service:route-switch'
      ) as RouteSwitch;
    }

    willTransition(transition: Transition<unknown>): void {
      super.willTransition?.(transition);
      if (this.routeSwitch.locked) {
        this.routeSwitch.abordTransition(transition);
        return;
      }
    }
  };

  const descWill = Object.getOwnPropertyDescriptor(
    klass.prototype,
    'willTransition'
  );
  const descDid = Object.getOwnPropertyDescriptor(
    klass.prototype,
    'didTransition'
  );

  action(klass.prototype, 'willTransition', descWill!);
  action(klass.prototype, 'didTransition', descDid!);
  return klass;
}
