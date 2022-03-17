import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { RouteSwitchProtected } from '@triptyk/ember-route-switch/decorators/route-switch-protection';
import type RouteSwitch from '@triptyk/ember-route-switch/services/route-switch';

@RouteSwitchProtected
export default class Articles extends Route {
  @service declare routeSwitch: RouteSwitch;

  activate(): void {
    this.routeSwitch.escapeCondition = () => {
      return false;
    };
  }
}
