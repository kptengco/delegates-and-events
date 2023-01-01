import {
    Component,
    OnDestroy,
    ChangeDetectorRef
} from "@angular/core";

import {
    ICovid19TrackerDelegateEvent,
    Covid19TrackerEventLoadingState,
    Covid19TrackerEventService
} from "../covid19-tracker";
import { Covid19Statistic } from "../covid19-tracker/model";

@Component({
    template: ""
})
export abstract class Covid19FeedComponent implements ICovid19TrackerDelegateEvent, OnDestroy {

    private delegateId!: number;
    public errorMessage!: string | undefined;
    public loading!: boolean;

    constructor(
        private readonly eventService: Covid19TrackerEventService,
        protected readonly cdr: ChangeDetectorRef
    ) {
        this.delegateId = eventService.subscribeDelegate(this);
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
        this.eventService.unsubscribeDelegate(this.delegateId);
    }
}
