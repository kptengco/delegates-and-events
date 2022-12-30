import { Component } from "@angular/core";

import { Covid19Statistic } from "src/app/covid19-tracker/model";
import { Covid19FeedComponent } from "../covid19-feed.component";


@Component({
    selector: "covid19-feed-summary-component",
    templateUrl: "./covid19-feed.summary.component.html"
})
export class Covid19FeedSummaryComponent extends Covid19FeedComponent {

    private totalActiveCases!: number;
    private lastUpdate!: Date;

    public get overallActiveCases(): number {
        return this.totalActiveCases;
    }

    public get updatedAt(): Date {
        return this.lastUpdate;
    }

    public override statisticUpdate(statistic: Covid19Statistic[]): void {
        this.updateSummary(statistic);
    }

    private updateSummary(statistic: Covid19Statistic[]): void {
        for (const stat of statistic) {
            if (stat.continent === "All") {
                this.totalActiveCases = stat.cases.active;
                this.lastUpdate = new Date(stat.time);
                break;
            }
        }
    }
}