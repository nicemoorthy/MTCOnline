import { Component, OnInit } from '@angular/core';
import { IStage } from './stage';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { StageService } from './stage.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Location } from '@angular/common';

@Component({
	selector: 'app-root',
	styleUrls: ['./stage.component.css'],
	templateUrl: './stage-detail.component.html',
	providers: [StageService]
})

export class StageDetailComponent implements OnInit {
	
	comptitle: string = 'Stage Details';
	route_number: string;
	stageDetail: IStage[];
	constructor(private route: ActivatedRoute, private _stage: StageService, private location: Location) {}
	ngOnInit(){this.getStageDetail();}
	getStageDetail(): void {
		this.route_number = this.route.snapshot.paramMap.get('route_number');
		this._stage.getStageByRouteNo(this.route_number)
		.subscribe(stageDetail=> this.stageDetail = stageDetail);
	}
}