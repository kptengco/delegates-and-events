class Covid19CaseStatistic {
    public active!: number | null;
    public critical!: number | null;
    public new!: string | null;
    public recovered!: number | null;
    public total!: number;
    public '1M_pop'!: string | null;
}

class Covid19DeathStatistic {
    public new?: string | null;
    public total!: number | null;
    public '1M_pop'!: string | null;
}

class Covid19TestStatistic {
    public total!: number | null;
    public '1M_pop'!: string | null;
}

export class Covid19StatisticResponse {
    public get!: string;
    public errors!: string[];
    public parameters!: string[];
    public response!: Covid19Statistic[];
    public results!: number;
}

export class Covid19Statistic {
    public cases!: Covid19CaseStatistic;
    public population!: number | null;
    public continent!: string | null;
    public country!: string;
    public time!: string;
    public deaths!: Covid19DeathStatistic;
    public tests!: Covid19TestStatistic;
    public day!: string;
}
