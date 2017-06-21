import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { DatePickerComponent } from "app/directives/datepicker/datepicker-directive.component";

declare let d3: any;

@Component({
  selector: "summary-chart",
  templateUrl: "app/directives/summary/summary-directive.component.html",
  styleUrls: ["app/directives/summary/summary-directive.component.css"],
  providers: []
})

export class SummaryComponent implements OnInit {
  public lineOptions;
  public donutChartOptions;
  public jobStatusWeeklyData;
  public jobStatusPercentageData;

  private _className: string;

  constructor(private _router: Router) {
    this._className = "SummaryComponent";
  }

  public ngOnInit() {

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
          startAngle: function (d) { return d.startAngle - Math.PI },
          endAngle: function (d) { return d.endAngle - Math.PI }
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
  }

  public loadlineCharts() {
    this.jobStatusWeeklyData = this.sinAndCos();
  }

  public sinAndCos() {
    var sin = [], sin2 = [],
      cos = [];

    //Data is represented as an array of {x,y} pairs.
    for (var i = 0; i < 100; i++) {
      sin.push({ x: i, y: (i / 10) });
      sin2.push({ x: i, y: i % 10 == 5 ? null : (i / 10) * 0.25 + 0.5 });
      cos.push({ x: i, y: .5 * (i / 10 + 2) + Math.random() / 10 });
    }

    //Line chart data should be sent as an array of series objects.
    return [
      {
        values: sin,      //values - represents the array of {x,y} data points
        key: 'Success', //key  - the name of the series.
        color: '#2ca02c'  //color - optional: choose your own line color.
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
        area: true      //area - set to true if you want this line to turn into a filled area chart.
      }
    ];
  }

  public loadPercentageChart() {

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
  }
}
