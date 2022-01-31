
import { Injectable } from '@angular/core';
import {
    MatSnackBar,
    MatSnackBarHorizontalPosition,
    MatSnackBarVerticalPosition,
  } from '@angular/material/snack-bar';

@Injectable()
export class AlertService {
    horizontalPosition: MatSnackBarHorizontalPosition = 'center';
    verticalPosition: MatSnackBarVerticalPosition = 'top';
  
    constructor(private _snackBar: MatSnackBar) {}
  
    openSnackBar() {
      this._snackBar.open('Succes!!', 'close', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration:3000
      });
    }

    openFormServices(){
      
    }
  }