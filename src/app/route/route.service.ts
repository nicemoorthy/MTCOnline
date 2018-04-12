import { Injectable } from '@angular/core';
import { Http , Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch'; 
import { IRoute } from './route';

@Injectable()
export class RouteService {
	private _routeurl='assets/route.json';
	constructor(private _http: Http){}

	getroutes(): Observable<IRoute[]> {
		const  headers = new Headers();
		headers.append('content-type', 'application/json');
		return this._http.get(this._routeurl, {headers : headers})
		.map(
			(response: Response) => <IRoute[]> response.json()
		)
		.catch(this.handleError); 
	}

	private handleError(error: Response) { 
		console.error(error); 
		return Observable.throw(error.json().error()); 
	} 
}