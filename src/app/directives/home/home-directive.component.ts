import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "home-directive",
  templateUrl: "app/directives/home/home-directive.component.html",
  styleUrls: ["app/directives/home/home-directive.component.css"],
  providers: []
})

export class HomeComponent implements OnInit {
  private _className: string;

  constructor(private _router: Router) {
    this._className = "HomeComponent";
  }

  public ngOnInit() {
    
  }
}