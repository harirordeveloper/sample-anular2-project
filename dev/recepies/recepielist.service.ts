/**
 * Created by hari on 17/8/16.
 */
import { Injectable } from 'angular2/core';
import { Http, Response, Headers } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'

@Injectable()
export class RecepieListService {
  constructor(private _http: Http){}

  getRecepies(access_token): Observable<any>{
    let headers = new Headers();
    headers.append('Authorization',access_token);
    return this._http.get('http://localhost:4000/api/v1/recipes.json', { headers: headers }).map(res => res.json());
  }
}
