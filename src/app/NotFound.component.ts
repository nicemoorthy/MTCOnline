import { Component } from '@angular/core';
import { PsafeTestingService } from './psafe/psafe.service';

@Component ({  
   selector: 'my-app',  
   template: 'Not Found',
   providers: [PsafeTestingService]
})  
export class PageNotFoundComponent {  

constructor(private _psafe: PsafeTestingService) {}
   
	ngOnInit() : void {
		this._psafe.getEmergencyOverride()
		.subscribe(data => data);
	}
} 