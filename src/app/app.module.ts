import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
// Application related component
import { AppComponent } from './app.component';
import { RouteComponent } from './route/route.component';
import { StageComponent } from './stage/stage.component';
import { StageDetailComponent } from './stage/stage-detail.component';
import { PageNotFoundComponent } from  './NotFound.component';


const appRoutes: Routes = [
   { path: 'route', component: RouteComponent },
   { path: 'stage', component: StageComponent },
   { path: 'stage-detail/:route_number', component: StageDetailComponent },
   { path: '**', component: PageNotFoundComponent } 
];


@NgModule({
  imports: [
    BrowserModule, HttpModule, HttpClientModule, FormsModule, RouterModule.forRoot(appRoutes,{ enableTracing: true })
  ],
  providers: [ ],
  declarations: [
    AppComponent, RouteComponent, StageComponent, PageNotFoundComponent, StageDetailComponent 
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
