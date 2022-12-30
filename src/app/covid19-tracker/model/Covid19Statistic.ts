class Covid19CaseStatistic {
    public active!: number;
    public critical!: number;
    public new!: string;
    public recovered!: number;
    public total!: number;
}

class Covid19DeathStatistic {
    public new?: string;
    public total!: number;
}

class Covid19TestStatistic {
    public total!: number;
}

export class Covid19StatisticResponse {
    public errors!: string[];
    public paramters!: string[];
    public response!: Covid19Statistic[];
    public results!: number;
}

export class Covid19Statistic {
    public cases!: Covid19CaseStatistic;
    public continent!: string;
    public country!: string;
    public time!: string;
    public deaths!: Covid19DeathStatistic;
    public tests!: Covid19TestStatistic;
}
