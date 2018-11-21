import { NgModule, APP_INITIALIZER, Injector } from '@angular/core';
import { RootComponent } from './root.component';
import { RootRoutingModule } from './root-routing.module';
import { AppModule } from '@app/app.module';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatIconRegistry } from '@angular/material';
import { CommonModule } from '@shared/common/common.module';
import { AppPreBootstrap } from './AppPreBootstrap';
import { AppConsts } from '@shared/AppConsts';
import { API_BASE_URL } from '@shared/service-proxies/service-proxies';
import { AppSessionService } from '@shared/common/session/app-session.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '@shared/common/utils/auth-interceptor';
import { PlatformService } from '@shared/common/utils/platform.service';
import { UiService } from '@shared/common/utils/ui.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from './environments/environment';

export function appInitializer (injector: Injector) {
  let ui = injector.get(UiService);

  return () => {
    return new Promise((resolve, reject) => {
      AppPreBootstrap.run(() => {
        // ui.setBusy();
        
        //注入iconfont
        injector.get(MatIconRegistry).registerFontClassAlias('Qxicon','Qxicon');

        // 域名判定
        injector.get(PlatformService).init();

        let sessionService: AppSessionService = injector.get(AppSessionService);
        // console.log('准备获取用户信息');
        // sessionService.init().then(() => {
          // setTimeout(() => {
            resolve();
            // ui.clearBusy();
          // },2000)
        // })
      })
    })
  }
}
export function getRemoteServiceBaseUrl(): string {
  return AppConsts.remoteServiceBaseUrl;
}

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    CommonModule.forRoot(),
    RootRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AppModule
  ],
  providers: [
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 3000}},
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    { provide: API_BASE_URL, useFactory: getRemoteServiceBaseUrl},
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializer,
      deps: [Injector],
      multi: true
    }
  ],
  bootstrap: [RootComponent]
})
export class RootModule { }