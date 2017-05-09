import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NgchangeExComponent } from './components/ngchange_ex/ngchange_ex';
import { ObservComponent } from './components/observerComponent/observercomponent';
import { Observ2Component } from './components/observerComponent2/observercomponent';
import {SuperParentComponent} from './components/superParent/superParent';
import {LogServices} from './services/loggservice';
import {DashboardComponent} from './components/dashboard/dashboard';
import { ObservePromise } from  './components/observeVspromise/observePromise';

// shared
import {Image3dDirective} from './shared/3d_casousel/3dimage';
const appRoutes: Routes = [
  { path: 'home', component: NgchangeExComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'observePromise', component: ObservePromise },
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    NgchangeExComponent,
    ObservComponent,
    Observ2Component,
    SuperParentComponent,
    DashboardComponent,
    ObservePromise,
    Image3dDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LogServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
