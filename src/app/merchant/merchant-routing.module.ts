import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MerchantComponent } from './merchant.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  { 
    path: '',
    component: MerchantComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'detail/:goodsId', component: DetailComponent },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchantRoutingModule { }
