import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { OddevenComponent } from './oddeven/oddeven.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    OddevenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
