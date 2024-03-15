import type RouterService from '@ember/routing/router-service';
import type Transition from '@ember/routing/transition';
import Service from '@ember/service';
export default class CurrentTransitionService extends Service {
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
//# sourceMappingURL=current-transition.d.ts.map