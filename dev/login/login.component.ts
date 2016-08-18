import { Component } from 'angular2/core';
import { OnInit} from 'angular2/core';
import { FormBuilder } from 'angular2/common';
import { ControlGroup } from 'angular2/common';
import { Validators} from 'angular2/common';
import { LoginService } from './login.service';
import { RouteConfig } from 'angular2/router';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { Router } from 'angular2/router';

@Component({
    selector: 'login-form',
    templateUrl:  'dev/login/login.tpl.html',
    styleUrls: ['dev/login/login.css'],
    providers: [LoginService],
    directives: [ROUTER_DIRECTIVES]
})
export class LoginComponent implements OnInit{
    myForm: ControlGroup;
    errors: string;
    response: string;
    user = { email: '', password: '' }
    constructor(private _formBuilder: FormBuilder, private _loginService: LoginService, private _router: Router){}
    onSubmit(){
        this.user = this.myForm.value;
        this._loginService.login({user_session: this.user})
            .subscribe( response => this.navigateToHome(response), error => this.authenticationFailed(error));

    }

    ngOnInit(){
        this.myForm = this._formBuilder.group({
            'email': ['', Validators.required],
            'password': ['', Validators.required]
        })
    }

    navigateToHome(response){
      localStorage.setItem('access_token', response.token );
      localStorage.setItem('user_id', response.user_id );
      this._router.navigate(['MealPlans']);
    }

    authenticationFailed(error){
      this.errors = error.json().errors;
    }
}
