import { NgModule, APP_INITIALIZER, Injector } from '@angular/core';
import { RootComponent } from './root.component';
import { RootRoutingModule } from './root-routing.module';
import { AppModule } from '@app/app.module';
import { CommonModule } from '@shared/common/common.module';
import { AppPreBootstrap } from './AppPreBootstrap';
import { AppConsts } from '@shared/AppConsts';
import { API_BASE_URL } from '@shared/service-proxies/service-proxies';
import { AppSessionService } from '@shared/common/session/app-session.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from '@shared/common/utils/auth-interceptor';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from './environments/environment';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

registerLocaleData(zh);

export function appInitializer (injector: Injector) {

  return () => {
    return new Promise((resolve, reject) => {
      AppPreBootstrap.run(() => {
        // ui.setBusy();
        


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
    AppModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    { provide: API_BASE_URL, useFactory: getRemoteServiceBaseUrl},
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializer,
      deps: [Injector],
      multi: true,
    },
    { provide: NZ_I18N, useValue: zh_CN }
  ],
  bootstrap: [RootComponent]
})
export class RootModule { }