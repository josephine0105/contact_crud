import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GeneralModule } from './general/general.module';
import { GeneralRoutingModule } from './general/general.routing';
import { MaterialModule } from './material/material.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GeneralModule,
    GeneralRoutingModule,
    MaterialModule,
    SharedModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
