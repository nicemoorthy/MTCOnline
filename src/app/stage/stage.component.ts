import { Component } from '@angular/core';
import { IStage } from './stage';
import { StageService } from './stage.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Component({
	selector: 'app-root',
	templateUrl: './stage.component.html',
	providers: [StageService]
})

export class StageComponent {
	comptitle: string = 'Stage';
	istages: IStage[];
	constructor(private _stage: StageService) {}
   
	ngOnInit() : void {
		this._stage.getstages()
		.subscribe(istages => this.istages = istages);
	}
}
