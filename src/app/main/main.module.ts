import { NgModule } from "@angular/core";
import { MainRoutingModeule } from "./main-routing.module";
import { IndexComponent } from "./index/index.component";

@NgModule({
  imports: [
    MainRoutingModeule,
  ],
  declarations: [
    IndexComponent,
  ]
})
export class MainModule{

}