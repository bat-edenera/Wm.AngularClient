import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, NavigationStart } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRouteGuard } from '@shared/common/utils/auth-route-guard';
import { AppDashboardComponent } from './app-dashboard/app-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: AppDashboardComponent,
    canActivate: [AppRouteGuard],
  },
  {
    path: 'app',
    component: AppComponent,
    children: [
      {
        path: 'main',
        loadChildren: './main/main.module#MainModule',
        data: { preload: true }
      },
      {
        path: 'hotel',
        loadChildren: './hotel/hotel.module#HotelModule',
        data: { preload: true }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(
    private _router: Router
  ) {
    this._router.events.subscribe((event: NavigationStart) => {
      // console.log('appRouting', event)
    })
  }
}
