import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from "@angular/router";
import { AppConsts } from "@shared/AppConsts";

@Injectable()
export class AppRouteGuard implements CanActivate, CanActivateChild{

  constructor(
    private _router: Router
  ){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
    if (location.origin === AppConsts.originLocation.dev || location.origin === AppConsts.originLocation.main) {
      this._router.navigate(['/app/hotel/home']);
      return false
    }
    return true;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // if (location.origin === AppConsts.originLocation.main) {
    //   return true
    // }
    // if (location.origin === AppConsts.originLocation.dev && state.url != '/app/hotel/home') {
    //   this._router.navigate(['/app/hotel/home']);
    //   return false
    // }
    return true;
  }
}