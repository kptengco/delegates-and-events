import { Covid19Statistic } from "../covid19-tracker/model";

export class Covid19GroupStatisticAdapter {

    private shouldCollapse: boolean = false;

    public get collapseView(): boolean {
        return this.shouldCollapse
    };

    public get statistic(): Covid19Statistic {
        return this.adaptee;
    }

    constructor(
        private readonly adaptee: Covid19Statistic
    ) { }

    public toggleCollapse(): void {
        this.shouldCollapse = !this.shouldCollapse;
    }
}
