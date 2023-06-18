import { NgModule } from "@angular/core";

import {
    Covid19TrackerApiService,
    Covid19TrackerEventService
} from "./service";

@NgModule({
    providers: [
        Covid19TrackerApiService,
        Covid19TrackerEventService
    ]
})
export class Covid19Module { }
