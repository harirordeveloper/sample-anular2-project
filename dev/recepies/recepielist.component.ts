import {Component} from "angular2/src/core/metadata";
import { RecepieListService } from "./recepielist.service";

@Component({
	selector: 'recepie-list',
	templateUrl: './dev/recepies/recepielist.tpl.html',
	styleUrls: ['dev/recepies/recepies.css']
	providers: [RecepieListService]
})
export class RecepieListComponent implements OnInit{
	recepieLlist: Array<Object>;
	listElement: any;
	constructor(private _recepieListService: RecepieListService){}

	ngOnInit(){
		this.listElement = document.getElementById('recepies-list')[0];
		console.log(this.listElement)

		this._recepieListService.getRecepies(localStorage.getItem('access_token'))
		    .subscribe(
		               	response => this.recepieLlist = response,
		               	error => console.log(error)
		               );
	}

	// enbleList(){
	// 	$('#recepies-list .item').removeClass('grid-group-item');
	// 	$("#recepies-list item").addClass('list-group-item')
	// }

	// enbleGid(){
	// 	$('#recepies-list .item').removeClass('rlist-group-item');
	// 	$('#recepies-list .item').addClass('grid-group-item');
	// }
}