import { NgModule } from "@angular/core";
import { RouterModule, Router, NavigationStart } from '@angular/router';
import { IndexComponent } from "./index/index.component";
@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      // component: ,
      children: [
        { path: 'index', component: IndexComponent },
      ]
    }
  ])],
  exports: [RouterModule]
})
export class MainRoutingModeule {
  constructor(
    private _router: Router
  ) {
    this._router.events.subscribe((event: NavigationStart) => {
      // console.log('mainRouting', event)
    })
  }
}