import * as ngCommon from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ServiceProxiesModule } from '@shared/service-proxies/service-proxies.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ngCommon.CommonModule,
        HttpClientModule,
        ServiceProxiesModule,
    ],
    declarations: [
    ],
})
export class CommonModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CommonModule,
            providers: [
                // AppRouteGuard
            ]
        };
    }
}
