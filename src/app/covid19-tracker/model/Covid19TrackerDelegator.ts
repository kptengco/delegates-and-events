import { Covid19TrackerEventLoadingState } from "../enum";
import { ICovid19TrackerEventListener } from "../interface";
import { Covid19Statistic } from "./Covid19Statistic";

/**
 * @description consider this for internal use only by this module
 * @module Covid19Module
 * @class Covid19TrackerDelegator
 * @implements {ICovid19TrackerEventListener}
 */
export class Covid19TrackerDelegator implements ICovid19TrackerEventListener {

    constructor(
        private readonly delegates: Map<number, ICovid19TrackerEventListener>
    ) { }

    public statisticLoading(state: Covid19TrackerEventLoadingState, message?: string): void {
        for (const delegate of this.delegates.values()) {
            delegate.statisticLoading(state, message);
        }
    }

    public statisticUpdate(statistic: Covid19Statistic[]): void {
        for (const delegate of this.delegates.values()) {
            delegate.statisticUpdate(statistic);
        }
    }
}
