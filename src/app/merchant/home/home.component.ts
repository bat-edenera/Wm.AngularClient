import { Component, OnInit, Injector } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { extend } from 'webdriver-js-extender';
import { AppComponentBase } from '@shared/common/app-component-base';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends AppComponentBase implements OnInit {

  constructor(
    injector: Injector,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    super(injector)
  }

  ngOnInit() {
  }

  detail() {
    this.router.navigate(['../detail'],{ relativeTo: this.route})
  }

}
