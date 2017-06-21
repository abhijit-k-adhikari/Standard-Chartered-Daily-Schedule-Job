import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

// component related data --------------------------------------
import { MainData } from "app/views/main/main-ui-data";
import { MainUIService } from "app/services/main-ui-service";

import { HomeComponent } from "app/views/directives/home/home-directive.component";
import { TaskMonitorComponent } from "app/directives/taskmonitor/taskmonitor-directive.component";
import { SummaryComponent } from "app/views/directives/summary/summary-directive.component";

@Component({
    selector: "my-home-list",
    templateUrl: "app/views/main/main.component.html",
    styleUrls: ["app/views/main/main.component.css"],
    providers: [MainUIService]
})
export class MainComponent implements OnInit {

    public tiles: MainData[];
    public selectedTile: MainData;
    public selectedTileDisplay: string;

    constructor(private _router: Router, private _mainUIService: MainUIService) {
    }

    public ngOnInit() {
        $("div.bhoechie-tab-menu>div.list-group>a").click(function (e) {
            e.preventDefault();
            $(this).siblings('a.active').removeClass("active");
            $(this).addClass("active");
            var index = $(this).index();
            $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
            $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
        });
    }
}
