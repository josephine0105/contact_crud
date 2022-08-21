import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddContactComponent } from './add-contact/add-contact.component';
import { MaterialModule } from '../material/material.module';
import { ViewListComponent } from './view-list/view-list.component';
@NgModule({
  declarations: [
    AddContactComponent,
    ViewListComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
