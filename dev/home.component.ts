import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES, Router } from 'angular2/router';

@Component({
	selector: 'test1',
	template: `
		Welcome to Recepie Books
	`
	directives: [ROUTER_DIRECTIVES]
})
export class HomeComponent implements OnInit{
	constructor(private router: Router){};

	ngOnInit(): any{
		if(localStorage.getItem('access_token')==''){
			this.router.navigate(['Login']);
		}
	}
}
