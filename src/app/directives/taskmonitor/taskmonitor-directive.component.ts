import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { MyGridComponent } from "app/directives/mygrid/mygrid.component";
import { IMyGridSettings } from "app/directives/mygrid/mygrid-interface";
import { JobDetailComponent } from "app/directives/jobdetail/jobdetail-directive.component";

@Component({
  selector: "task-monitor",
  templateUrl: "app/directives/taskmonitor/taskmonitor-directive.component.html",
  styleUrls: ["app/directives/taskmonitor/taskmonitor-directive.component.css"],
  providers: []
})

export class TaskMonitorComponent implements OnInit {
  private _className: string;
  private _showSummary: boolean = true;

  private myGridSettings: IMyGridSettings = {} as IMyGridSettings;

  constructor(private _router: Router) {
    this._className = "TaskMonitorComponent";
  }

  public ngOnInit() {
    this.renderPage();
  }

  private renderPage() {
    if (this._showSummary === true) {
      this.loadSummary();
    } else {
      this.loadSingleEntity();
    }
  }

  private loadSummary(): void {
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

    let data = [
      { "select": true, "statusicon": "", "name": "SQL Server Backup", "command": "Backup", "owner": "Admin 1", "progress": "100%", "status": "Success", "latestrun": "06/08/2017 10:03:20 PM", "nextrun": "07/08/2017 10:03:20 PM", "description": "Created by SRV32\Adminstrator at 06/08/2017 10:37 AM" },
      { "select": false, "statusicon": "", "name": "Backup Job 2", "command": "Backup", "owner": "Admin 2", "progress": "100%", "status": "Success", "latestrun": "06/08/2017 10:03:20 PM", "nextrun": "07/08/2017 10:03:20 PM", "description": "Created by SRV32\Adminstrator at 06/08/2017 10:37 AM" },
      { "select": true, "statusicon": "", "name": "Server Backup", "command": "Backup", "owner": "Admin 3", "progress": "100%", "status": "Failed", "latestrun": "06/08/2017 10:03:20 PM", "nextrun": "07/08/2017 10:03:20 PM", "description": "Created by SRV32\Adminstrator at 06/08/2017 10:37 AM" },
      { "select": true, "statusicon": "", "name": "End of the Day Job", "command": "Backup", "owner": "Admin 1", "progress": "", "status": "Onhold", "latestrun": "", "nextrun": "", "description": "Created by SRV32\Adminstrator at 06/08/2017 10:37 AM" },
      { "select": true, "statusicon": "", "name": "System Initialization", "command": "Backup", "owner": "Admin 1", "progress": "30%", "status": "Running", "latestrun": "06/08/2017 10:03:20 PM", "nextrun": "07/08/2017 10:03:20 PM", "description": "Created by SRV32\Adminstrator at 06/08/2017 10:37 AM" }
    ];

    this.myGridSettings.rowData = {
      localdata: data,
      datatype: "json",
      datafields:
      [
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
  }

  private loadSingleEntity(): void {

  }

  private gotoJobDetailPage() {
    this._showSummary = false;
    this.renderPage();
  }
  
  private gotoSummaryPage() {
    this._showSummary = true;
    this.renderPage();
  }
}