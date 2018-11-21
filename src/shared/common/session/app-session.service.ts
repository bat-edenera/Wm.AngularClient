import { Injectable } from '@angular/core';
import { AppConsts } from '@shared/AppConsts';
import { SessionServiceProxy } from '@shared/service-proxies/service-proxies';
import { UtileService } from '../utils/util.service';

@Injectable({
  providedIn: 'root'
})
export class AppSessionService {
  private _authToken: string;
  private _user;
  private _merchant;
  private _goods;

  constructor(
    private _sessionService: SessionServiceProxy,
    private util: UtileService
  ) { 
    this._authToken = this.util.getCookieValue(AppConsts.authorization.encrptedAuthTokenName)
  }

  init() {
    return new Promise((resolve, reject) => {
      this._sessionService.getUserInfo('test').subscribe(res => {
        console.log(res);
        resolve()
      })
    })
  }
  
  /**
   * 登陆token
   */
  get authToken() {
    return this._authToken;
  }
  /**
   * 用户信息
   */
  get user() {
    return this._user;
  }
  get userId() {
    return this.user.id
  }

  /**
   * 商家信息
   */
  set merchantId(id) {
    this._merchant = this._merchant || {};
    this._merchant.id = id;
  }
  set merchant(merchant) {
    this._merchant = merchant;
  }

  get merchant() {
    return this._merchant;
  }
  get merchantId() {
    this._merchant = this._merchant || {};
    return this._merchant.id;
  }

  /**
   * 商品信息
   */

  set goodsId(id) {
    this._goods = this._goods || {};
    this._goods.id = id;
  }
  set goods(goods) {
    this._goods = goods;
  }

  get goods() {
    return this._goods;
  }
  get goodsId() {
    this._goods = this._goods || {};
    return this._goods.id;
  }
}
