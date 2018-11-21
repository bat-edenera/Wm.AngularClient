import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelRoutingModule } from './hotel-routing.module';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { HotelComponent } from './hotel.component';
import { AppCommonModule } from '@app/shared/common/common.module';

@NgModule({
  imports: [
    CommonModule,
    AppCommonModule,
    HotelRoutingModule
  ],
  declarations: [HomeComponent, DetailComponent, HotelComponent],
  exports: [
    HotelComponent,
    HomeComponent
  ]
})
export class HotelModule { }
