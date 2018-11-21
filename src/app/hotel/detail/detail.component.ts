import { Component, OnInit, Injector } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent extends AppComponentBase implements OnInit {

  constructor(
    injector: Injector,
    private route: ActivatedRoute
  ) {
    super(injector)
    this.route.paramMap.subscribe(param => {
      this.app.goodsId = param.get('goodsId')
    })
  }

  ngOnInit() {
  }

}
