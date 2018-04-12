import { Injectable } from '@angular/core';
import { Http , Response} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'; 
import { IStage } from './stage';
import * as _ from 'lodash';

@Injectable()
export class StageService {
	private _stageurl='assets/stage.json';
	constructor(private _http: HttpClient){}

	getstages(): Observable<IStage[]> {
		return this._http.get(this._stageurl)
		.map(data => _.values(data))
		.catch(this.handleError); 
	}

	getStageByRouteNo(stage: string): Observable<IStage[]> {
		return this._http.get(this._stageurl)
		.map(
			data => {
				let stageD; 
				let allstages = <IStage[]> data;
				allstages.forEach(
					function (o: any) {
						if(o.stage_number == stage){
							stageD = o;
						}
					}
				);
				return stageD;
			}
		)
		.catch(this.handleError); 
	}

	private handleError(error: Response) { 
		console.error(error); 
		return Observable.throw(error); 
	} 
}