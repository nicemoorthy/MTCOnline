import { Component } from '@angular/core';
import { IRoute } from './route';
import { RouteService } from './route.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Component({
	selector: 'app-root',
	templateUrl: './route.component.html',
	providers: [RouteService]
})

export class RouteComponent {
	comptitle: string = 'Route';
	iroutes: IRoute[];
	constructor(private _route: RouteService) {}

	ngOnInit() : void {
		this._route.getroutes().subscribe(iroutes => this.iroutes = iroutes);
	}
}
