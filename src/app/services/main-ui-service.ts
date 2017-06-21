import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";

// component related data --------------------------------------
import { MainData, MAIN_DATA } from "app/views/main/main-ui-data";

@Injectable()
export class MainUIService {

    private actionUrl: string;
    private headers: Headers;
    private params: string;

    private _className: string;
    private _methodName: string;

    constructor() {
        this._className = "MainUIService";
    }
    // normal FETCH Request .......................................................
    public GetTiles() {
        return Promise.resolve(MAIN_DATA);
    }
}
