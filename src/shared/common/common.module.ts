import * as ngCommon from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ServiceProxiesModule } from '@shared/service-proxies/service-proxies.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRouteGuard } from './utils/auth-route-guard';
import { OverlayModule } from '@angular/cdk/overlay';
import { SpinComponent } from './utils/spin.component';
import { MatProgressSpinnerModule } from '@angular/material';
import { PortalModule } from '@angular/cdk/portal';
import { MaterialModule } from './meterial.module';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ngCommon.CommonModule,
        MaterialModule,
        HttpClientModule,
        ServiceProxiesModule,
    ],
    declarations: [
        SpinComponent
    ],
    entryComponents: [SpinComponent]
})
export class CommonModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CommonModule,
            providers: [
                AppRouteGuard
            ]
        };
    }
}
