import { Component, OnInit, Injector } from '@angular/core';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { AppComponentBase } from '@shared/common/app-component-base';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  animations: [appModuleAnimation()]
})
export class IndexComponent extends AppComponentBase implements OnInit {

  constructor(
    injector: Injector,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    super(injector);
  }

  ngOnInit() {
  }
  openSnackBar(): void {
    this.router.navigate(['../../hotel/home'], { relativeTo: this.route });
  }
  aboutus(): void {
    this.router.navigate(['../about'], { relativeTo: this.route });
  }

}
