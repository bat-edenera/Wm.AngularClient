import { Component, Injector } from '@angular/core';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { AppComponentBase } from '@shared/common/app-component-base';

@Component({
  selector: 'app-layout',
  templateUrl: './app.component.html',
  animations: [appModuleAnimation()]
})
export class AppComponent extends AppComponentBase{

  title = 'wonmore';
  constructor(injector: Injector) {
    super(injector)
  }
}
