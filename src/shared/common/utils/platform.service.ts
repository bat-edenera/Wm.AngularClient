import { Injectable } from '@angular/core';
import { AppConsts } from '@shared/AppConsts';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  private _dev = false;
  private _main = false;
  private _hotel = false;
  private _b2b = false;

  constructor() { }

  get dev(): boolean {
    return this._dev;
  }
  
  get main(): boolean {
    return this._main;
  }

  get hotel(): boolean {
    return this._hotel;
  }

  get b2b(): boolean {
    return this._b2b;
  }

  init(): void {
    switch (location.origin) {
      case AppConsts.originLocation.dev: {
        this._dev = true;
        break;
      }
      case AppConsts.originLocation.hotel: {
        this._hotel = true;
        break;
      }
      case AppConsts.originLocation.b2b: {
        this._b2b = true;
        break;
      }
      case AppConsts.originLocation.main: {
        this._main = true;
        break;
      }
    }
  }
}
