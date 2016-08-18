import { OnInit } from "angular2/core";
import { MealPlanService } from "./mealplan.service"
import {Component} from "angular2/core";

@Component({
  selector: 'meal-plan-list',
  templateUrl: 'dev/mealplanlist/mealplanlist.tpl.html'
})
export class MealPlanListComponent implements OnInit {
  mealPlanList: Array<Object>;
  access_token: string;
  user_id: string;

  constructor(private _mealPlanService: MealPlanService){}

  ngOnInit(){
    this.access_token = localStorage.getItem('access_token');
    this.user_id = localStorage.getItem('user_id');
    this._mealPlanService.getPlans(this.access_token, this.user_id)
      .subscribe(
        response => this.mealPlanList = response,
        error => console.log(error)
      );
  }
}
