import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AddContactComponent } from 'src/app/shared/add-contact/add-contact.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // encapsulation:ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

 constructor(){

 }
 ngOnInit(): void {
   
 }

}
