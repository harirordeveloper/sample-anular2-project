/**
 * Created by hari on 18/8/16.
 */

import { Injectable } from 'angular2/core';
import { Http } from 'angular2/http';
import {Headers} from "angular2/src/http/headers";

@Injectable()

export class LogoutService{
  constructor(private _http: Http){}

  logout(access_token: string){
    let headers = new Headers();
    headers.append('Authorization', access_token);
    return this._http.get('http://localhost:4000/api/v1/users/logout', { headers: headers } ).map(res => res.json())
  }
}
