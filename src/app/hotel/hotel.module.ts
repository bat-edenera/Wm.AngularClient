import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelRoutingModule } from './hotel-routing.module';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { HotelComponent } from './hotel.component';
import { AppCommonModule } from '@app/shared/common/common.module';
import { MaterialModule } from '@shared/common/meterial.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppCommonModule,
    HotelRoutingModule,
    MaterialModule,
  ],
  declarations: [HomeComponent, DetailComponent, HotelComponent],
  exports: [
    HotelComponent,
    HomeComponent
  ]
})
export class HotelModule { }
