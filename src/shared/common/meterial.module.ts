import { NgModule } from '@angular/core';
import * as Mat from '@angular/material';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  exports: [
    Mat.MatButtonModule,
    Mat.MatIconModule,
    Mat.MatCardModule,
    Mat.MatBadgeModule,
    Mat.MatDialogModule,
    Mat.MatDialogModule,
    Mat.MatTooltipModule,
    Mat.MatGridListModule,
    Mat.MatProgressSpinnerModule,
    Mat.MatSnackBarModule,
    Mat.MatPaginatorModule,
    Mat.MatMenuModule,
    PortalModule,
    OverlayModule,
    LayoutModule
  ],
})
export class MaterialModule { }