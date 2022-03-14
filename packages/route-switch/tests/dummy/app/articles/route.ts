import Route from '@ember/routing/route';
import { RouteSwitchProtected } from '@triptyk/ember-route-switch/decorators/route-switch-protection';

@RouteSwitchProtected
export default class Articles extends Route {}
