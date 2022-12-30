import { Component, OnInit } from "@angular/core";
import { Covid19TrackerEventService } from "./covid19-tracker";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {

    constructor(
        private readonly covid19TrackerEventService: Covid19TrackerEventService
    ) { }

    public ngOnInit(): void {
        this.covid19TrackerEventService.loadStatistics();
    }
}
