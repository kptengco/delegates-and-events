import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ICovid19TrackerEventListener } from "./interface";

import {
    Covid19TrackerApiService,
    Covid19TrackerDelegateRegistryService,
    Covid19TrackerEventService
} from "./service";
import { Covid19TrackerDelegateToken } from "./token";

@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [
        Covid19TrackerApiService,
        Covid19TrackerDelegateRegistryService,
        Covid19TrackerEventService,
        {
            provide: Covid19TrackerDelegateToken,
            useValue: new Map<number, ICovid19TrackerEventListener>()
        }
    ]
})
export class Covid19Module { }
