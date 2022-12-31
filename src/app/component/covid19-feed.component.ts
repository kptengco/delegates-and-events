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
    public errorMessage!: string | undefined;
    public loading!: boolean;

    constructor(
        private readonly delegateRegistryService: Covid19TrackerDelegateRegistryService,
        protected readonly cdr: ChangeDetectorRef
    ) {
        this.delegateId = delegateRegistryService.subscribeDelegate(this);
    }

    public abstract statisticUpdate(statistic: Covid19Statistic[]): void;

    public statisticLoading(state: Covid19TrackerEventLoadingState, message?: string | undefined): void {
        this.errorMessage = undefined;
        this.loading = state === Covid19TrackerEventLoadingState.LOADING;

        if (state === Covid19TrackerEventLoadingState.ERROR) {
            this.errorMessage = message;
        }

        this.cdr.markForCheck();
    }

    public ngOnDestroy(): void {
        this.delegateRegistryService.unsubscribeDelegate(this.delegateId);
    }
}
