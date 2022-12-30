import { ChangeDetectionStrategy, Component } from "@angular/core";

import { Covid19Statistic } from "../covid19-tracker/model";
import { Covid19FeedComponent } from "./covid19-feed.component";

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
        const today = new Date();
        const yearToDate = today.getFullYear();
        let shouldSort: boolean | undefined;

        for (const stat of statistic) {
            const dateTime = new Date(stat.time);

            if (stat.continent === stat.country) {
                continue;
            }

            if (this.ranking.length === this.rankLimit) {
                if (shouldSort || (shouldSort === undefined)) {
                    this.ranking.sort((compareA: Covid19Statistic, compareB: Covid19Statistic) => {
                        return compareA.cases.active - compareB.cases.active;
                    });
                }

                if (stat.cases.active > this.ranking[0].cases.active) {
                    shouldSort = true;
                    this.ranking.shift();
                    this.ranking.push(stat);
                } else {
                    shouldSort = false;
                }

                continue;
            }

            if (yearToDate === dateTime.getFullYear()) {
                this.ranking.push(stat);
            }
        }

        this.ranking.sort((compareA: Covid19Statistic, compareB: Covid19Statistic) => {
            return compareB.cases.active - compareA.cases.active;
        });
    }
}
