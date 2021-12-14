import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CompaComponent } from './compa/compa.component';
import { CompbComponent } from './compb/compb.component';
import { CompcComponent } from './compc/compc.component';
import { GokuComponent } from './goku/goku.component';
import { GohanComponent } from './gohan/gohan.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    CompaComponent,
    CompbComponent,
    CompcComponent,
    GokuComponent,
    GohanComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
