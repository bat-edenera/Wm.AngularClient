import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HotelComponent } from './hotel.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  { path: '', component: HotelComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'detail/:goodsId', component: DetailComponent },
      {
        path: 'merchant/:merchantId', loadChildren: '../merchant/merchant.module#MerchantModule',
        data: { preload: true }  },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelRoutingModule { }
