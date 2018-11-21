import { NgModule } from "@angular/core";
import * as mat from "@angular/material";

@NgModule({
  exports: [
    mat.MatButtonModule,
    mat.MatSnackBarModule
  ]
})
export class AppCommonModule {}