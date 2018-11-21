import { NgModule } from "@angular/core";
import { RouterModule, Router, NavigationStart, Routes } from "@angular/router";
import {filter} from 'rxjs/operators'

const routes: Routes = [
  {
    path: '',
    loadChildren: './app/app.module#AppModule',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class RootRoutingModule {
 constructor(
   private _router: Router
 ){
    _router.events.pipe(
      filter((e) => {
        return e instanceof NavigationStart
      })
    )
      .subscribe((event: NavigationStart) => {
        // console.log('rootRoutingStart',event)
      })
 }
}
