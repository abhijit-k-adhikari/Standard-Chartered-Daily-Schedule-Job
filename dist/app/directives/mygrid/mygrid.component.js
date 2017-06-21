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
var angular_jqxgrid_1 = require("app/external/ts/jqx-grid/angular_jqxgrid");
var mygrid_interface_1 = require("app/directives/mygrid/mygrid-interface");
var MyGridComponent = (function () {
    function MyGridComponent() {
        this.inputGridSettings = {};
        this.gridSettings = {};
    }
    MyGridComponent.prototype.ngOnChanges = function (changes) {
        this.myJqxGrid.createWidget({});
        if (changes["inputGridSettings"] && changes["inputGridSettings"].currentValue) {
            var colDefs = this.inputGridSettings.columnDefs;
            var dataAdapters = this.inputGridSettings.rowData;
            var dataAdapter = new $.jqx.dataAdapter(dataAdapters);
            this.gridSettings = {
                source: dataAdapter,
                columns: colDefs,
                height: 210,
                width: 900,
                editmode: "selectedcell",
                editable: true
            };
            this.myJqxGrid.clearselection();
            this.myJqxGrid.updatebounddata();
            this.myJqxGrid.setOptions(this.gridSettings);
            this.myJqxGrid.showfiltercolumnbackground(true);
            this.myJqxGrid.refreshdata();
            this.myJqxGrid.scrolloffset(0, 0);
            this.myJqxGrid.createWidget(this.gridSettings);
        }
    };
    __decorate([
        core_1.ViewChild("jqxGrid"), 
        __metadata('design:type', (typeof (_a = typeof angular_jqxgrid_1.jqxGridComponent !== 'undefined' && angular_jqxgrid_1.jqxGridComponent) === 'function' && _a) || Object)
    ], MyGridComponent.prototype, "myJqxGrid", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', (typeof (_b = typeof mygrid_interface_1.IMyGridSettings !== 'undefined' && mygrid_interface_1.IMyGridSettings) === 'function' && _b) || Object)
    ], MyGridComponent.prototype, "inputGridSettings", void 0);
    MyGridComponent = __decorate([
        core_1.Component({
            selector: "my-grid",
            templateUrl: "app/directives/mygrid/mygrid.component.html",
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [])
    ], MyGridComponent);
    return MyGridComponent;
    var _a, _b;
}());
exports.MyGridComponent = MyGridComponent;

//# sourceMappingURL=mygrid.component.js.map
