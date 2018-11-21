import { NgModule } from "@angular/core";
import { MainRoutingModeule } from "./main-routing.module";
import { IndexComponent } from "./index/index.component";
import { AppCommonModule } from "@app/shared/common/common.module";
import { TestComponent } from './test/test.component';
import { AboutComponent } from './about/about.component';
import { MaterialModule } from "@shared/common/meterial.module";

@NgModule({
  imports: [
    MainRoutingModeule,
    MaterialModule,
    AppCommonModule
  ],
  declarations: [
    IndexComponent,
    TestComponent,
    AboutComponent
  ]
})
export class MainModule{

}