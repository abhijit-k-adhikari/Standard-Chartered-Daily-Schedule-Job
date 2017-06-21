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
var JobDetailComponent = (function () {
    function JobDetailComponent(_router) {
        this._router = _router;
        this._className = "JobDetailComponent";
    }
    JobDetailComponent.prototype.ngOnInit = function () {
        $('.tree-toggle').click(function () {
            $(this).parent().children('ul.tree').toggle(200);
        });
        $(function () {
            $('.tree-toggle').parent().children('ul.tree').toggle(200);
        });
    };
    JobDetailComponent = __decorate([
        core_1.Component({
            selector: "jobdetail",
            templateUrl: "app/directives/jobdetail/jobdetail-directive.component.html",
            styleUrls: ["app/directives/jobdetail/jobdetail-directive.component.css"],
            providers: []
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], JobDetailComponent);
    return JobDetailComponent;
}());
exports.JobDetailComponent = JobDetailComponent;

//# sourceMappingURL=jobdetail-directive.component.js.map
