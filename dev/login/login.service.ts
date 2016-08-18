/**
 * Created by hari on 17/8/16.
 */
import { Injectable } from 'angular2/core';
import { Http, Response, Headers } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'

@Injectable()
export class LoginService {
  constructor(private _http: Http){}

  login(userDetails: {user_session: { email: string, password: string }}): Observable<any>{
    console.log(userDetails);
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post('http://localhost:4000/api/v1/login/authenticate.json', JSON.stringify(userDetails), {headers: headers}).map(res => res.json());
  }
}
