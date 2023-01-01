import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import {
    Covid19TrackerApiService,
    Covid19TrackerEventService
} from "./service";

@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [
        Covid19TrackerApiService,
        Covid19TrackerEventService
    ]
})
export class Covid19Module { }
