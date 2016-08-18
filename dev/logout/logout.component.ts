/**
 * Created by hari on 18/8/16.
 */
import {Component} from "angular2/src/core/metadata";
import {OnInit} from "angular2/src/core/linker/interfaces";
import {Http} from "angular2/src/http/http";
import {LogoutService} from "./logout.service";
import {Router} from "angular2/src/router/router";

@Component({
  template: ``
})
export class LogoutComponent implements OnInit{
  constructor(private _http: Http, private _logOutService: LogoutService, private _router: Router){}
  ngOnInit(): any{
    this._logOutService.logout(localStorage.getItem('access_token'))
        .subscribe(
          response => this.onLogout(response),
          error => console.log(error)
        );
  }

  onLogout(response){
    localStorage.setItem('access_token', '');
    localStorage.setItem('user_id', '');
    this._router.navigate(['Home']);
  }
}
