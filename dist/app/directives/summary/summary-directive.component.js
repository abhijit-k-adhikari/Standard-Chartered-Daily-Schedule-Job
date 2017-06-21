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
var SummaryComponent = (function () {
    function SummaryComponent(_router) {
        this._router = _router;
        this._className = "SummaryComponent";
    }
    SummaryComponent.prototype.ngOnInit = function () {
        this.lineOptions = {
            chart: {
                type: 'lineChart',
                height: 250,
                width: 600,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 40,
                    left: 55
                },
                x: function (d) { return d.x; },
                y: function (d) { return d.y; },
                useInteractiveGuideline: true,
                xAxis: {
                    axisLabel: 'No of days'
                },
                yAxis: {
                    axisLabel: 'No of Jobs',
                    tickFormat: function (d) {
                        return d3.format('.02f')(d);
                    },
                    axisLabelDistance: -10
                }
            }
        };
        this.donutChartOptions = {
            chart: {
                type: "pieChart",
                height: 400,
                width: 400,
                donut: true,
                x: function (d) { return d.key; },
                y: function (d) { return d.y; },
                showLabels: true,
                pie: {
                    startAngle: function (d) { return d.startAngle - Math.PI; },
                    endAngle: function (d) { return d.endAngle - Math.PI; }
                },
                duration: 500,
                legend: {
                    margin: {
                        top: 5,
                        right: 35,
                        bottom: 5,
                        left: 40
                    }
                }
            }
        };
        this.loadlineCharts();
        this.loadPercentageChart();
    };
    SummaryComponent.prototype.loadlineCharts = function () {
        this.jobStatusWeeklyData = this.sinAndCos();
    };
    SummaryComponent.prototype.sinAndCos = function () {
        var sin = [], sin2 = [], cos = [];
        for (var i = 0; i < 100; i++) {
            sin.push({ x: i, y: (i / 10) });
            sin2.push({ x: i, y: i % 10 == 5 ? null : (i / 10) * 0.25 + 0.5 });
            cos.push({ x: i, y: .5 * (i / 10 + 2) + Math.random() / 10 });
        }
        return [
            {
                values: sin,
                key: 'Success',
                color: '#2ca02c'
            },
            {
                values: cos,
                key: 'Failed',
                color: '#ff7f0e'
            },
            {
                values: sin2,
                key: 'On-hold',
                color: '#7777ff',
                area: true
            }
        ];
    };
    SummaryComponent.prototype.loadPercentageChart = function () {
        this.jobStatusPercentageData = [
            {
                key: "Success",
                y: 38
            },
            {
                key: "Failed",
                y: 10
            },
            {
                key: "On-hold",
                y: 19
            },
            {
                key: "In-active",
                y: 43
            }
        ];
    };
    SummaryComponent = __decorate([
        core_1.Component({
            selector: "summary-chart",
            templateUrl: "app/directives/summary/summary-directive.component.html",
            styleUrls: ["app/directives/summary/summary-directive.component.css"],
            providers: []
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], SummaryComponent);
    return SummaryComponent;
}());
exports.SummaryComponent = SummaryComponent;

//# sourceMappingURL=summary-directive.component.js.map
