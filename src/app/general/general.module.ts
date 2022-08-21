import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { ContactDataComponent } from './contact-data/contact-data.component';
import { MaterialModule } from '../material/material.module';
@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
    ContactDataComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class GeneralModule { }
