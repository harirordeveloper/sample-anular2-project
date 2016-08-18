/**
 * Created by hari on 17/8/16.
 */
import { Injectable } from 'angular2/core';
import { Observable } from 'rxjs/Observable';
import { OnInit} from 'angular2/core'
import { Http } from "angular2/http";
import {Headers} from "angular2/src/http/headers";

@Injectable()
export class MealPlanService{
  access_token: string;
  user_id: string;

  constructor( private _http: Http){}
  getPlans(access_token: string, user_id: string): Observable<any>{
    let headers = new Headers();
    headers.append('Authorization',access_token);
    return this._http.get('http://localhost:4000/api/v1/users/'+user_id+'/meal_plans.json', { headers: headers }).map(res => res.json());
  }
}
