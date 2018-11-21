import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MerchantRoutingModule } from './merchant-routing.module';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { MerchantComponent } from './merchant.component';
import { AppCommonModule } from '@app/shared/common/common.module';

@NgModule({
  imports: [
    CommonModule,
    AppCommonModule,
    MerchantRoutingModule
  ],
  declarations: [HomeComponent, DetailComponent, MerchantComponent]
})
export class MerchantModule { }
