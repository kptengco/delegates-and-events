import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Covid19TrackerEventLoadingState } from "../enum";
import { ICovid19TrackerEvent, ICovid19TrackerDelegateEvent } from "../interface";
import { Covid19Statistic, Covid19TrackerDelegator } from "../model";
import { Covid19TrackerApiService } from "./covid19-tracker.api.service";

@Injectable({
    providedIn: "root"
})
export class Covid19TrackerEventService implements ICovid19TrackerEvent {

    private delegator!: Covid19TrackerDelegator;
    private delegateId: number = 0;
    private readonly delegates: Map<number, ICovid19TrackerDelegateEvent> = new Map();

    constructor(
        private readonly apiService: Covid19TrackerApiService
    ) {
        this.delegator = new Covid19TrackerDelegator(this.delegates);
    }

    public subscribeDelegate(delegate: ICovid19TrackerDelegateEvent): number {
        this.delegateId++;

        this.delegates.set(this.delegateId, delegate);

        return this.delegateId;
    }

    public unsubscribeDelegate(delegateId: number): void {
        if (this.delegates.has(delegateId) === false) {
            throw new Error(`'${delegateId}' delegateId not found in the dictionary.`);
        }

        this.delegates.delete(delegateId);
    }

    public loadStatistics(): void {
        this.delegator.statisticLoading(Covid19TrackerEventLoadingState.LOADING);

        this.apiService.getStatistics()
            .subscribe({
                next: (statistic: Covid19Statistic[]) => {
                    this.delegator.statisticLoading(Covid19TrackerEventLoadingState.SUCCESS);
                    this.delegator.statisticUpdate(statistic);
                },
                error: (error: HttpErrorResponse) => {
                    this.delegator.statisticLoading(Covid19TrackerEventLoadingState.ERROR, error.message);
                }
            });
    }
}
