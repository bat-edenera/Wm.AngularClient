import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, NavigationStart } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/app/editor',
    pathMatch: 'full'
    // canActivate: [AppRouteGuard],
  },
  {
    path: 'app',
    // component: AppComponent,
    children: [
      {
        path: 'editor',
        loadChildren: './editor/editor.module#EditorModule',
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
