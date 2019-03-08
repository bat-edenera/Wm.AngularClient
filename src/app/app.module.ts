import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppCommonModule } from './shared/common/common.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { AppDashboardComponent } from './app-dashboard/app-dashboard.component';
import { HotelModule } from './hotel/hotel.module';
import { MaterialModule } from '@shared/common/meterial.module';
import { HeaderComponent } from './shared/layout/header.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AppDashboardComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    AppCommonModule,
    HotelModule,
  ]
})
export class AppModule { }
