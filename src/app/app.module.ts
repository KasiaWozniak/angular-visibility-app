import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Dodaj FormsModule
import { CommonModule } from '@angular/common';  // Dodaj CommonModule

import { AppComponent } from './app.component';
import { VisibilityDirective } from './visibility.directive';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    FormsModule,  // Dodaj FormsModule do imports
    CommonModule, // Dodaj CommonModule do imports
    AppComponent,
    VisibilityDirective,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
