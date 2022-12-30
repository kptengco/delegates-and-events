import { HttpErrorResponse } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";

import { Covid19TrackerEventLoadingState } from "../enum";
import { ICovid19TrackerEventListener } from "../interface";
import { Covid19Statistic, Covid19TrackerDelegator } from "../model";
import { Covid19TrackerDelegateToken } from "../token";
import { Covid19TrackerApiService } from "./covid19-tracker.api.service";

@Injectable({
    providedIn: "root"
})
export class Covid19TrackerEventService {

    private delegator!: Covid19TrackerDelegator;

    constructor(
        private readonly apiService: Covid19TrackerApiService,
        @Inject(Covid19TrackerDelegateToken) delegates: Map<number, ICovid19TrackerEventListener>
    ) {
        this.delegator = new Covid19TrackerDelegator(delegates);
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
