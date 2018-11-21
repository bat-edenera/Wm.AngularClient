import { Component, Injector } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './merchant.component.html',
})
export class MerchantComponent  extends AppComponentBase{
    public test = '商家-公共头部';
    constructor(
        injector: Injector,
        private route: ActivatedRoute
    ){
        super(injector)
        this.route.paramMap.subscribe(param => {
            this.app.merchantId = param.get('merchantId')
            console.log(this.app.merchantId)
        })
    }

}