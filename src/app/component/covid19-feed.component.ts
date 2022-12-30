import {
    Component,
    OnDestroy,
    ChangeDetectorRef
} from "@angular/core";

import {
    Covid19TrackerDelegateRegistryService,
    ICovid19TrackerEventListener,
    Covid19TrackerEventLoadingState
} from "../covid19-tracker";
import { Covid19Statistic } from "../covid19-tracker/model";

@Component({
    template: ""
})
export abstract class Covid19FeedComponent implements ICovid19TrackerEventListener, OnDestroy {

    private delegateId!: number;

    constructor(
        private readonly delegateRegistryService: Covid19TrackerDelegateRegistryService,
        protected readonly cdr: ChangeDetectorRef
    ) {
        this.delegateId = delegateRegistryService.subscribeDelegate(this);
    }

    public abstract statisticUpdate(statistic: Covid19Statistic[]): void;

    public statisticLoading(state: Covid19TrackerEventLoadingState, message?: string | undefined): void {
        if (state === Covid19TrackerEventLoadingState.LOADING) {
            this.cdr.detach();
        } else {
            this.cdr.reattach();
        }
    }

    public ngOnDestroy(): void {
        this.delegateRegistryService.unsubscribeDelegate(this.delegateId);
    }
}
