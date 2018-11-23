import { NgModule } from '@angular/core';
import * as ApiServiceProxies from './service-proxies'

@NgModule({
  providers: [
    ApiServiceProxies.SessionServiceProxy,
    ApiServiceProxies.HotelServiceProxy
  ]
})
export class ServiceProxiesModule { }
