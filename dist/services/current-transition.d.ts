/// <reference types="ember__service" />
/// <reference types="ember__routing" />
import RouterService from '@ember/routing/router-service';
import Transition from '@ember/routing/transition';
import Service from '@ember/service';
declare class CurrentTransitionService extends Service {
    currentTransition?: Transition;
    router: RouterService;
    setCurrentTransition(t: Transition): void;
    goBack(route: string): void;
}
declare module '@ember/service' {
    interface Registry {
        'current-transition': CurrentTransitionService;
    }
}
export { CurrentTransitionService as default };
