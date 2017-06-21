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
var main_ui_service_1 = require("app/services/main-ui-service");
var MainComponent = (function () {
    function MainComponent(_router, _mainUIService) {
        this._router = _router;
        this._mainUIService = _mainUIService;
    }
    MainComponent.prototype.ngOnInit = function () {
        $("div.bhoechie-tab-menu>div.list-group>a").click(function (e) {
            e.preventDefault();
            $(this).siblings('a.active').removeClass("active");
            $(this).addClass("active");
            var index = $(this).index();
            $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
            $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
        });
    };
    MainComponent = __decorate([
        core_1.Component({
            selector: "my-home-list",
            templateUrl: "app/views/main/main.component.html",
            styleUrls: ["app/views/main/main.component.css"],
            providers: [main_ui_service_1.MainUIService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, (typeof (_a = typeof main_ui_service_1.MainUIService !== 'undefined' && main_ui_service_1.MainUIService) === 'function' && _a) || Object])
    ], MainComponent);
    return MainComponent;
    var _a;
}());
exports.MainComponent = MainComponent;

//# sourceMappingURL=main.component.js.map
