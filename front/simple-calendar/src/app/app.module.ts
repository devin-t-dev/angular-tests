import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MonthDayComponent } from './month-day/month-day.component';
import { MonthTableComponent } from './month-table/month-table.component';

@NgModule({
  declarations: [
    AppComponent,
    MonthDayComponent,
    MonthTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
