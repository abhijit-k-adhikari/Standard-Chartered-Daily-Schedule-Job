import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "datepicker",
  templateUrl: "app/directives/datepicker/datepicker-directive.component.html",
  styleUrls: ["app/directives/datepicker/datepicker-directive.component.css"],
  providers: []
})

export class DatePickerComponent implements AfterViewInit {

  private _className: string;

  constructor(private _router: Router) {
    this._className = "DatePickerComponent";
  }

  public ngAfterViewInit() {
    $(document).ready(function () {
      var options = {};
      $('#config-demo').daterangepicker(options, function (start, end, label) {
        console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to '
          + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
      });
    })
  }
  
}


