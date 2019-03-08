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
}
