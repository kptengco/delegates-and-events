import { Component, ChangeDetectionStrategy } from "@angular/core";

import { Covid19Statistic } from "../../covid19-tracker/model";
import { Covid19GroupStatisticAdapter } from "../../model";
import { Covid19FeedComponent } from "../covid19-feed.component";

type GroupKey = string;

@Component({
    selector: "covid19-feed-list-component",
    templateUrl: "./covid19-feed.list.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Covid19FeedListComponent extends Covid19FeedComponent {

    private readonly listDictionary: Map<GroupKey, Covid19Statistic[]> = new Map();
    private readonly groupDictionary: Map<GroupKey, Covid19GroupStatisticAdapter> = new Map();

    public groups: Covid19GroupStatisticAdapter[] = [];

    public override statisticUpdate(statistic: Covid19Statistic[]): void {
        this.updateGroupList(statistic);
        this.sortGroupList();
    }

    public getList(group: Covid19Statistic): Covid19Statistic[] {
        const groupKey = this.generateGroupKey(group);
        const list = this.listDictionary.get(groupKey);

        if (list === undefined) {
            throw new Error(`'${groupKey}' groupKey is not found in the dictionary.`);
        }

        return list;
    }

    private updateGroupList(statistic: Covid19Statistic[]) {
        for (const stat of statistic) {
            if (stat.continent === null) {
                continue;
            }

            if (stat.continent === "All") {
                continue;
            }

            const groupKey = this.generateGroupKey(stat);
            const group = this.listDictionary.get(stat.continent);

            if (stat.continent === stat.country) {
                this.groupDictionary.set(groupKey, new Covid19GroupStatisticAdapter(stat));

                if (group === undefined) {
                    this.listDictionary.set(groupKey, []);
                }

                continue;
            }

            if (group === undefined) {
                this.listDictionary.set(groupKey, [stat]);
            } else {
                group.push(stat);
            }
        }
    }

    private generateGroupKey(statistic: Covid19Statistic): string {
        if (statistic.continent === null) {
            throw new Error(`continent cannot be null`);
        }

        return statistic.continent;
    }

    private sortGroupList(): void {
        this.groups = Array.from(this.groupDictionary.values())
            .sort((compareA: Covid19GroupStatisticAdapter, compareB: Covid19GroupStatisticAdapter) => {
                return (compareB.statistic.cases.active || 0) - (compareA.statistic.cases.active || 0);
            });

        for (const list of this.listDictionary.values()) {
            list.sort((compareA: Covid19Statistic, compareB: Covid19Statistic) => {
                return (compareB.cases.active || 0) - (compareA.cases.active || 0);
            });
        }
    }
}
