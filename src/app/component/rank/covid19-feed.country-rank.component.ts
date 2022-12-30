import { ChangeDetectionStrategy, Component } from "@angular/core";

import { Covid19Statistic } from "../../covid19-tracker/model";
import { Covid19FeedComponent } from "../covid19-feed.component";

@Component({
    selector: "covid19-feed-country-rank-component",
    templateUrl: "./covid19-feed.country-rank.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Covid19FeedCountryRankComponent extends Covid19FeedComponent {

    private ranking: Covid19Statistic[] = [];

    public readonly rankLimit: number = 5;
    public get list(): Covid19Statistic[] {
        return this.ranking;
    }

    public override statisticUpdate(statistic: Covid19Statistic[]): void {
        this.updateRanking(statistic);
    }

    private updateRanking(statistic: Covid19Statistic[]): void {
        this.ranking = statistic
            .filter(stat => stat.continent !== stat.country)
            .sort((compareA: Covid19Statistic, compareB: Covid19Statistic) => {
                return compareB.cases.active - compareA.cases.active;
            })
            .slice(0, this.rankLimit);
    }
}
