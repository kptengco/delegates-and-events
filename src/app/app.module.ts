import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import {
    Covid19FeedCountryRankComponent,
    Covid19FeedListComponent,
    Covid19FeedSummaryComponent
} from "./component";
import { Covid19Module } from "./covid19-tracker";

@NgModule({
    declarations: [
        AppComponent,
        Covid19FeedCountryRankComponent,
        Covid19FeedListComponent,
        Covid19FeedSummaryComponent
    ],
    imports: [
        BrowserModule,
        Covid19Module
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
