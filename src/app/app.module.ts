import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RemindersComponent } from './components/reminders/reminders.component';
import { RemindComponent } from './components/remind/remind.component';
import {MatTableModule} from '@angular/material/table';
import { TranslatePipe } from './pipes/translate-status';

@NgModule({
  declarations: [
    AppComponent,
    RemindersComponent,
    RemindComponent,
    TranslatePipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
