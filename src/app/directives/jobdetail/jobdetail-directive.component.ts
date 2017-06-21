import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "jobdetail",
  templateUrl: "app/directives/jobdetail/jobdetail-directive.component.html",
  styleUrls: ["app/directives/jobdetail/jobdetail-directive.component.css"],
  providers: []
})

export class JobDetailComponent implements OnInit {

  private _className: string;

  constructor(private _router: Router) {
    this._className = "JobDetailComponent";
  }

  public ngOnInit() {
    $('.tree-toggle').click(function () {	
        $(this).parent().children('ul.tree').toggle(200);
    });

    $(function(){
        $('.tree-toggle').parent().children('ul.tree').toggle(200);
    })
  }
}
