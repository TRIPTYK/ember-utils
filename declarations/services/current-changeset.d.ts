import type RouterService from '@ember/routing/router-service';
import type Transition from '@ember/routing/transition';
import Service from '@ember/service';
interface DirtyAbleObject {
    isDirty: boolean;
}
export default class CurrentChangeset extends Service {
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
export {};
//# sourceMappingURL=current-changeset.d.ts.map