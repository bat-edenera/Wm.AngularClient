import { Component, OnInit, Injector } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppComponentBase } from '@shared/common/app-component-base';

@Component({
  selector: 'app-hotel-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends AppComponentBase implements OnInit {
  goods = [];
  constructor(
    injector: Injector,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    super(injector)
  }

  ngOnInit() {
    this.goods = [
      { title: '商品1', id: 10001, merchantId: 'a0001' },
      { title: '商品2', id: 10002, merchantId: '' },
      { title: '商品3', id: 10003, merchantId: '' },
      { title: '商品4', id: 10004, merchantId: 'b0001' },
    ]
  }

  toGoodsDetail(goods) {
    this.ui.setBusy();
    setTimeout(() => {
      this.ui.clearBusy()
      if (goods.merchantId) {
        this.router.navigate(['/app/hotel/merchant/' + goods.merchantId+'/detail/'+ goods.id])
      }else {
        this.router.navigate(['/app/hotel/detail/' + goods.id])
      }
    },500)
  }

  detail() {
    this.router.navigate(['/app/hotel/detail'])
  }

  merchant() {
    this.router.navigate(['/app/hotel/merchant/home'])
  }

}
