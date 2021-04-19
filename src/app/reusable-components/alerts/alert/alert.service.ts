import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  horizontalPosition: MatSnackBarHorizontalPosition;
  verticalPosition: MatSnackBarVerticalPosition;

  constructor(private snackBar: MatSnackBar) { }



  notifySuccess(message: string, duration: number, verticalAlign?: MatSnackBarVerticalPosition, horizontalAlign?: MatSnackBarHorizontalPosition){
    this.horizontalPosition = horizontalAlign;
    this.verticalPosition = verticalAlign;
    let snackConfig = new MatSnackBarConfig();
    snackConfig.duration = duration;
    snackConfig.horizontalPosition = this.horizontalPosition;
    snackConfig.verticalPosition = this.verticalPosition;
    snackConfig.panelClass = ['success-class'];
    this.snackBar.open(message, 'Aceptar', snackConfig);


  }

  notifyWarn(message: string, duration: number, verticalAlign?: MatSnackBarVerticalPosition, horizontalAlign?: MatSnackBarHorizontalPosition){
    this.horizontalPosition = horizontalAlign;
    this.verticalPosition = verticalAlign;
    let snackConfig = new MatSnackBarConfig();
    snackConfig.duration = duration;
    snackConfig.horizontalPosition = this.horizontalPosition;
    snackConfig.verticalPosition = this.verticalPosition;
    snackConfig.panelClass = ['warn-class'];
    this.snackBar.open(message, 'Aceptar', snackConfig);

  }


}
