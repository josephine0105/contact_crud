import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddContactComponent } from 'src/app/shared/add-contact/add-contact.component';
import { ViewListComponent } from 'src/app/shared/view-list/view-list.component';

@Component({
  selector: 'app-contact-data',
  templateUrl: './contact-data.component.html',
  styleUrls: ['./contact-data.component.scss']
})
export class ContactDataComponent implements OnInit {
  public displayedColumns: string[] = ['name', 'email', 'company', 'number', 'actions'];
  public dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild('filter', { static: true }) filter!: ElementRef;
  public Details: any = [];
  contactDetails: any = [];
  data: any;
  editData: any = [];
  ngOnInit(): void {
    this.table()

  }

  constructor(public dialog: MatDialog) { }
  table() {
    this.dataSource = new MatTableDataSource(this.Details);
  }

  /**ADD A DATA FROM TABLE **/
  addContact(): void {
    const dialogRef = this.dialog.open(AddContactComponent, {
      width: '550px',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.Details.push({ Details: result.value });
      this.table()
    })

  }

  /**VIEW A DATA FROM TABLE  **/
  view(ViewData: any) {
    console.log(ViewData, "viedat")
    const dialogRef = this.dialog.open(ViewListComponent, {
      width: '550px',
      data: ViewData
    });
    dialogRef.afterClosed().subscribe(result => {
    })
  }

  /**EDIT A DATA FORM TABLE **/
  edit(editData: any) {
    console.log(editData, "edit")
    const dialogRef = this.dialog.open(AddContactComponent, {
      width: '550px',
      data: editData
    });
    dialogRef.afterClosed().subscribe(result => {
      this.editData.push({ Details: result });
      this.Details = this.editData
      this.table()
    })
  }

  /**DELETE A TABLE DATA **/
  delete(deleteData: any, x: any) {
    this.Details.splice(x, 1);
    this.table()
  }
  public doFilter(event: any) {
    this.dataSource.filter = event.target.value.trim();

  }

}
