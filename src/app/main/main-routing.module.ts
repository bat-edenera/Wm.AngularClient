import { NgModule } from "@angular/core";
import { RouterModule, Router, NavigationStart } from '@angular/router';
import { IndexComponent } from "./index/index.component";
import { TestComponent } from "./test/test.component";
import { AboutComponent } from "./about/about.component";

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: TestComponent,
      children: [
        { path: 'index', component: IndexComponent },
        { path: 'about', component: AboutComponent }
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