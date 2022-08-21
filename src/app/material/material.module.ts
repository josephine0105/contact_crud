import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule,ReactiveFormsModule }from '@angular/forms'; 
import {MatTableModule} from '@angular/material/table'; 
import { ToastrModule } from 'ngx-toastr';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatTableModule
  ],
  exports: [MatToolbarModule, MatIconModule,MatDialogModule,FormsModule,ReactiveFormsModule,MatTableModule,ToastrModule,MatCardModule,MatFormFieldModule]
})
export class MaterialModule { }
