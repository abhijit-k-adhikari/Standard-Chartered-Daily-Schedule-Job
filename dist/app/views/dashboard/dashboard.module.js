"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var ng2_nvd3_1 = require("ng2-nvd3");
var dashboard_routing_module_1 = require("./dashboard-routing.module");
var dashboard_component_1 = require("./dashboard.component");
var main_component_1 = require("app/views/main/main.component");
var home_directive_component_1 = require("app/directives/home/home-directive.component");
var taskmonitor_directive_component_1 = require("app/directives/taskmonitor/taskmonitor-directive.component");
var summary_directive_component_1 = require("app/directives/summary/summary-directive.component");
var jobdetail_directive_component_1 = require("app/directives/jobdetail/jobdetail-directive.component");
var datepicker_directive_component_1 = require("app/directives/datepicker/datepicker-directive.component");
var angular_jqxgrid_1 = require("app/external/ts/jqx-grid/angular_jqxgrid");
var mygrid_component_1 = require("app/directives/mygrid/mygrid.component");
var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule, forms_1.FormsModule, dashboard_routing_module_1.DashboardRoutingModule
            ],
            declarations: [
                ng2_nvd3_1.NvD3Component,
                dashboard_component_1.DashboardComponent,
                main_component_1.MainComponent,
                home_directive_component_1.HomeComponent,
                taskmonitor_directive_component_1.TaskMonitorComponent,
                summary_directive_component_1.SummaryComponent,
                jobdetail_directive_component_1.JobDetailComponent,
                angular_jqxgrid_1.jqxGridComponent,
                mygrid_component_1.MyGridComponent,
                datepicker_directive_component_1.DatePickerComponent
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;

//# sourceMappingURL=dashboard.module.js.map
