import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
 
interface moviesTop {
  rank: number;
  title: string;
  cash: number;
}
 
 
@Component({
  selector: 'app-matdialog',
  templateUrl: './matdialog.component.html',
  styleUrls: ['./matdialog.component.css']
})
export class MatDialog {
 
  action:string;
  local_data:any;
 
  constructor(
    public dialogRef: MatDialogRef<MatDialog>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: moviesTop) {
    console.log(data);
    this.local_data = {...data};
    this.action = this.local_data.action;
  }
 
  doAction(){
    this.dialogRef.close({event:this.action,data:this.local_data});
  }
 
  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }
 
}