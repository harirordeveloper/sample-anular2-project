import {Component} from 'angular2/core';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { RouteConfig, CanActivate } from 'angular2/router';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { UserProfileComponent } from './userprofile.component';
import {LogoutComponent} from "./logout/logout.component";
import {OnInit} from "angular2/core";
import {MealPlanListComponent} from "./mealplanlist/mealplanlist.component";
import { MealPlanService } from "./mealplanlist/mealplan.service";
import {RecepieListComponent} from "./recepies/recepielist.component";
import { LogoutService } from "./logout/logout.service";
import { AuthGuard } from "./auth.guard";
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import { Router } from 'angular2/router';

@Component({
    selector: 'my-app',
    template:
    `<div class="container">
      <ul class="nav nav-pills">
         <li [class.active]="router.isRouteActive(router.generate(['Home']))" role="presentation"><a [routerLink]="['Home']">Home</a></li>
         <li [class.active]="router.isRouteActive(router.generate(['Login']))" role="presentation" *ngIf="access_token==''"><a [routerLink]="['Login']">Login</a></li>
         <li [class.active]="router.isRouteActive(router.generate(['MealPlans']))" role="presentation" *ngIf="access_token !== ''"><a [routerLink]="['MealPlans']">Meal Plans</a></li>
         <li [class.active]="router.isRouteActive(router.generate(['RecepieList']))" role="presentation" *ngIf="access_token !== ''"><a [routerLink]="['RecepieList']">Recepie List</a></li>
         <li role="presentation" *ngIf="access_token !== ''"><a [routerLink]="['Logout']">Log Out</a></li>
      </ul>
      <br><br><br>
      <div class="container">
        <router-outlet></router-outlet>
      </div>
    </div>
    `,
    directives: [HomeComponent, LoginComponent, LogoutComponent, ROUTER_DIRECTIVES, RecepieListComponent],
    providers: [MealPlanService, LogoutService]
})
@RouteConfig([
    { path: '/', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/login', name: 'Login', component: LoginComponent },
    { path: '/logout', name: 'Logout', component: LogoutComponent, canActivate: [AuthGuard] },
    { path: '/meal_plans', name: 'MealPlans', component: MealPlanListComponent, canActivate: [AuthGuard]},
    { path: "/user_profile", name: 'UserProfile', component: UserProfileComponent, canActivate: [AuthGuard] },
    { path: "/recepie_list", name: 'RecepieList', component: RecepieListComponent, canActivate: [AuthGuard] }
])
export class AppComponent implements OnInit {
  access_token: string;
  loggedIn: boolean;
  user_id: string;

  constructor(private router: Router){}

  ngOnInit(){
    this.access_token = localStorage.getItem('access_token');
    this.user_id = localStorage.getItem('user_id');
    this.loggedIn = (this.access_token !== '')
  }
}
