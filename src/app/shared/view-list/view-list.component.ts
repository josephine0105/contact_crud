import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.scss']
})
export class ViewListComponent implements OnInit {
  viewDatas: any;
  constructor(public dialogRef: MatDialogRef<ViewListComponent>, @Inject(MAT_DIALOG_DATA) public viewData: any) { }

  ngOnInit(): void {
    this.viewDatas = this.viewData
    console.log(this.viewDatas)
    
  }
  public close() {
    this.dialogRef.close();
  }

}
