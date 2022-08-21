import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddContactComponent } from './shared/add-contact/add-contact.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'task1';
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  addContact(): void {
    const dialogRef = this.dialog.open(AddContactComponent, {
      width: '550px',
    });
  }
}
