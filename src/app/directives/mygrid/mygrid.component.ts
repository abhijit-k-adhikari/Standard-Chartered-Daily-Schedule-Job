import { Component, Input, Output, EventEmitter, OnChanges, ViewEncapsulation, ViewChild, AfterViewInit, OnInit, SimpleChanges } from "@angular/core";
import { jqxGridComponent } from "app/external/ts/jqx-grid/angular_jqxgrid";
import { IMyGridSettings } from "app/directives/mygrid/mygrid-interface";

@Component({
    selector: "my-grid",
    templateUrl: "app/directives/mygrid/mygrid.component.html",    
    encapsulation: ViewEncapsulation.None
})

export class MyGridComponent implements OnChanges, OnInit, AfterViewInit {
    @ViewChild("jqxGrid") public myJqxGrid: jqxGridComponent;

    @Input() public inputGridSettings: IMyGridSettings = {} as IMyGridSettings;

    private gridSettings: jqwidgets.GridOptions = {};

    private ngOnChanges(changes: SimpleChanges): void {
        this.myJqxGrid.createWidget({});

        if (changes["inputGridSettings"] && changes["inputGridSettings"].currentValue) {

            let colDefs: IjqxGridColumn[] = this.inputGridSettings.columnDefs;
            let dataAdapters: IjqxGridSource[] = this.inputGridSettings.rowData;
            let dataAdapter = new $.jqx.dataAdapter(dataAdapters);

            this.gridSettings = {
                source: dataAdapter,
                columns: colDefs,
                height:210,
                width: 900,
                editmode: "selectedcell",
                editable: true
            }
            this.myJqxGrid.clearselection();
            this.myJqxGrid.updatebounddata();
            this.myJqxGrid.setOptions(this.gridSettings);
            this.myJqxGrid.showfiltercolumnbackground(true);
            this.myJqxGrid.refreshdata();
            this.myJqxGrid.scrolloffset(0, 0);
            this.myJqxGrid.createWidget(this.gridSettings);
        }
    }
}