import { Injectable } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { SpinComponent } from './spin.component';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  overlayRef: OverlayRef;

  constructor(
    private overLay: Overlay,
  ) {
    console.log('utilservice init')
  }


  setBusy(elm?,options?) {
    if(!this.overlayRef) {
      this.overlayRef = this.overLay.create({
        hasBackdrop: true,
        positionStrategy: this.overLay.position().global().centerHorizontally().centerVertically()
      })
    }
    this.overlayRef.attach(new ComponentPortal(SpinComponent));
  }

  clearBusy(elm?) {
    this.overlayRef.detach()
  }
  
}
