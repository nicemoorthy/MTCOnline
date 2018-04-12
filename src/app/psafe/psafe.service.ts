import { Injectable } from '@angular/core';
import { Http , Response} from '@angular/http';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'; 
import 'rxjs/add/operator/do'; 
import * as _ from 'lodash';
import {OverrideSummary} from './OverrideSummary';
import {EmergencyOverrideRequest} from './EmergencyOverrideRequest';

@Injectable()
export class PsafeTestingService {
	private _stageurl='https://paz1eslad2p1v.corp.cvscaremark.com:4023/PBM/BenefitService/v1/getEmergencyOverride';
	constructor(private _http: HttpClient){}


	getEmergencyOverride(): Observable<OverrideSummary> {

		const headers = new HttpHeaders({
		'Content-Type':  'application/json',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'GET',
		'Access-Control-Allow-Headers': 'Content-Type'
		});
		const params = new HttpParams()
		.set('requesterID' , '""')
		.set('clientAppName' ,  '""')
		.set('clientTraceLevel' ,  '0')
		.set('application' , '""')
		.set('as400Route' , '""')
		.set('carrierID' , '"7700"')
		.set('accountID' , '"SR12547ACC"')
		.set('groupID' ,'"SR12547GRP"')
		.set('memberID' , '"SR132040101"')
		.set('productIdQualifier' ,'"03"')
		.set('ndc' , '"68180051201"')
		.set('inquiryDate' ,'""');
		return this._http.get(this._stageurl,{headers, params})
		.do(console.log)
		.map(data => _.values(data))
		.catch(this.handleError); 
	}

	private handleError(error: Response) { 
		console.error(error); 
		return Observable.throw(error); 
	} 
}