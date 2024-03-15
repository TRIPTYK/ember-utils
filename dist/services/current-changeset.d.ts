/// <reference types="ember__service" />
/// <reference types="ember__routing" />
import RouterService from '@ember/routing/router-service';
import Transition from '@ember/routing/transition';
import Service from '@ember/service';
interface DirtyAbleObject {
    isDirty: boolean;
}
declare class CurrentChangeset extends Service {
    router: RouterService;
    changeset?: DirtyAbleObject;
    waitingTransition?: Transition;
    approvalNeeded?: boolean;
    constructor(props: object | undefined);
    resetTransition(transition: Transition): void;
    checkTransition(transition: Transition): void;
    approveTransition(): void;
    denyTransition(): void;
    willDestroy(): void;
}
declare module '@ember/service' {
    interface Registry {
        'current-changeset': CurrentChangeset;
    }
}
export { CurrentChangeset as default };
