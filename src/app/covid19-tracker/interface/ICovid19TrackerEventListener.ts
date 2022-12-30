import { Covid19TrackerEventLoadingState } from "../enum";
import { Covid19Statistic } from "../model";

export interface ICovid19TrackerEventListener {
    statisticLoading(state: Covid19TrackerEventLoadingState, message?: string): void;
    statisticUpdate(statistic: Covid19Statistic[]): void;
}
