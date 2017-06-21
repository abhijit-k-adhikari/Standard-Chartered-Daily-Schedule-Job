import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { NvD3Component } from "ng2-nvd3";
import { Observable } from "rxjs/Rx";

// module -----------------
import { DashboardRoutingModule } from "./dashboard-routing.module";

// component -----------------
import { DashboardComponent } from "./dashboard.component";
import { MainComponent } from "app/views/main/main.component";
import { HomeComponent } from "app/directives/home/home-directive.component";
import { TaskMonitorComponent } from "app/directives/taskmonitor/taskmonitor-directive.component";
import { SummaryComponent } from "app/directives/summary/summary-directive.component";
import { JobDetailComponent } from "app/directives/jobdetail/jobdetail-directive.component";
import { DatePickerComponent } from "app/directives/datepicker/datepicker-directive.component";

import { jqxGridComponent } from "app/external/ts/jqx-grid/angular_jqxgrid";
import { MyGridComponent } from "app/directives/mygrid/mygrid.component"; 

@NgModule({
  imports: [
    CommonModule, FormsModule, DashboardRoutingModule
  ],
  declarations: [
    NvD3Component,
    DashboardComponent,
    MainComponent,
    HomeComponent,
    TaskMonitorComponent,
    SummaryComponent,
    JobDetailComponent,
    jqxGridComponent,
    MyGridComponent,
    DatePickerComponent
  ],
  providers: []
})

export class DashboardModule { }
