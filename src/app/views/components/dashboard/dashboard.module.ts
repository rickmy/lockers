import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DeveloperComponent } from './developer/developer.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HomePageComponent,
    DeveloperComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
