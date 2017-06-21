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
var router_1 = require("@angular/router");
var TaskMonitorComponent = (function () {
    function TaskMonitorComponent(_router) {
        this._router = _router;
        this._showSummary = true;
        this.myGridSettings = {};
        this._className = "TaskMonitorComponent";
    }
    TaskMonitorComponent.prototype.ngOnInit = function () {
        this.renderPage();
    };
    TaskMonitorComponent.prototype.renderPage = function () {
        if (this._showSummary === true) {
            this.loadSummary();
        }
        else {
            this.loadSingleEntity();
        }
    };
    TaskMonitorComponent.prototype.loadSummary = function () {
        this.myGridSettings.columnDefs =
            [
                { text: 'select', datafield: 'select', columntype: 'checkbox', width: 67 },
                { text: 'statusicon', columntype: 'statusicon', datafield: 'statusicon', width: 120 },
                { text: 'Name', datafield: 'name', columntype: 'textbox', width: 120 },
                { text: 'Command', datafield: 'command', columntype: 'textbox', width: 120 },
                { text: 'Owner', datafield: 'owner', columntype: 'textbox', width: 120 },
                { text: 'Progress', datafield: 'progress', columntype: 'textbox', width: 120 },
                { text: 'Status', datafield: 'status', columntype: 'textbox', width: 120 },
                { text: 'Latest Run', datafield: 'latestrun', columntype: 'textbox', width: 120 },
                { text: 'Next Run', datafield: 'nextrun', columntype: 'textbox', width: 120 },
                { text: 'Description', datafield: 'description', columntype: 'textbox', width: 120 }
            ];
        var data = [
            { "select": true, "statusicon": "", "name": "SQL Server Backup", "command": "Backup", "owner": "Admin 1", "progress": "100%", "status": "Success", "latestrun": "06/08/2017 10:03:20 PM", "nextrun": "07/08/2017 10:03:20 PM", "description": "Created by SRV32\Adminstrator at 06/08/2017 10:37 AM" },
            { "select": false, "statusicon": "", "name": "Backup Job 2", "command": "Backup", "owner": "Admin 2", "progress": "100%", "status": "Success", "latestrun": "06/08/2017 10:03:20 PM", "nextrun": "07/08/2017 10:03:20 PM", "description": "Created by SRV32\Adminstrator at 06/08/2017 10:37 AM" },
            { "select": true, "statusicon": "", "name": "Server Backup", "command": "Backup", "owner": "Admin 3", "progress": "100%", "status": "Failed", "latestrun": "06/08/2017 10:03:20 PM", "nextrun": "07/08/2017 10:03:20 PM", "description": "Created by SRV32\Adminstrator at 06/08/2017 10:37 AM" },
            { "select": true, "statusicon": "", "name": "End of the Day Job", "command": "Backup", "owner": "Admin 1", "progress": "", "status": "Onhold", "latestrun": "", "nextrun": "", "description": "Created by SRV32\Adminstrator at 06/08/2017 10:37 AM" },
            { "select": true, "statusicon": "", "name": "System Initialization", "command": "Backup", "owner": "Admin 1", "progress": "30%", "status": "Running", "latestrun": "06/08/2017 10:03:20 PM", "nextrun": "07/08/2017 10:03:20 PM", "description": "Created by SRV32\Adminstrator at 06/08/2017 10:37 AM" }
        ];
        this.myGridSettings.rowData = {
            localdata: data,
            datatype: "json",
            datafields: [
                { name: 'select', type: 'bool' },
                { name: 'statusicon', type: 'string' },
                { name: 'name', type: 'string' },
                { name: 'command', type: 'string' },
                { name: 'owner', type: 'string' },
                { name: 'progress', type: 'string' },
                { name: 'status', type: 'string' },
                { name: 'latestrun', type: 'string' },
                { name: 'nextrun', type: 'string' },
                { name: 'description', type: 'string' },
            ]
        };
    };
    TaskMonitorComponent.prototype.loadSingleEntity = function () {
    };
    TaskMonitorComponent.prototype.gotoJobDetailPage = function () {
        this._showSummary = false;
        this.renderPage();
    };
    TaskMonitorComponent.prototype.gotoSummaryPage = function () {
        this._showSummary = true;
        this.renderPage();
    };
    TaskMonitorComponent = __decorate([
        core_1.Component({
            selector: "task-monitor",
            templateUrl: "app/directives/taskmonitor/taskmonitor-directive.component.html",
            styleUrls: ["app/directives/taskmonitor/taskmonitor-directive.component.css"],
            providers: []
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], TaskMonitorComponent);
    return TaskMonitorComponent;
}());
exports.TaskMonitorComponent = TaskMonitorComponent;

//# sourceMappingURL=taskmonitor-directive.component.js.map
