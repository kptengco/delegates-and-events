import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Covid19Statistic, Covid19StatisticResponse } from "../model";

/**
 * @description consider this for internal use only by this module
 * @module Covid19Module
 * @class Covid19TrackerApiService
 */
@Injectable()
export class Covid19TrackerApiService {

    constructor(
        private readonly httpClient: HttpClient
    ) { }

    public getStatistics(): Observable<Covid19Statistic[]> {
        return this.httpClient.get<Covid19StatisticResponse>("https://covid-193.p.rapidapi.com/statistics", {
            headers: {
                "X-RapidAPI-Key": "463e5717e3msh9c05447c583eb8ap1ba9a7jsn98c1f32ef2a4",
                "X-RapidAPI-Host": "covid-193.p.rapidapi.com"
            }
        }).pipe(map(result => result.response));
    }
}
