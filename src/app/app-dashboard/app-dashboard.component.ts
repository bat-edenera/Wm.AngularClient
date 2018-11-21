import { Component, OnInit, Injector, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';
import { PlatformService } from '@shared/common/utils/platform.service';
import { AppComponentBase } from '@shared/common/app-component-base';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';

@Component({
  selector: 'app-app-dashboard',
  templateUrl: './app-dashboard.component.html',
})
export class AppDashboardComponent extends AppComponentBase implements OnInit {

  @ViewChild('overlayMenuList') overlayMenuList: TemplateRef<any>;

  constructor(
    injector: Injector,
    public platform: PlatformService,
  ) { 
    super(injector)
  }

  ngOnInit() {
    
  }

}
