import { Component, OnInit, Injector } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppComponentBase } from '@shared/common/app-component-base';
import { HotelServiceProxy } from '@shared/service-proxies/service-proxies';

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
    private route: ActivatedRoute,
    private _hotelService: HotelServiceProxy
  ) { 
    super(injector)
  }

  ngOnInit() {
    this._hotelService.getProducts('').subscribe(res => {
      console.log(res)
      this.goods = res;
    })
    
  }

  toGoodsDetail(goods) {
      if (goods.merchantId) {
        this.router.navigate(['/app/hotel/merchant/' + goods.merchantId+'/detail/'+ goods.id])
      }else {
        this.router.navigate(['/app/hotel/detail/' + goods.id])
      }
  }

  detail() {
    this.router.navigate(['/app/hotel/detail'])
  }

  merchant() {
    this.router.navigate(['/app/hotel/merchant/home'])
  }

}
