import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TestComponentComponent } from './test-component/test-component.component';
import { BankComponent } from './bank/bank.component';
import { ZippyComponent } from './zippy/zippy.component';
import { Tri001Component } from './tri001/tri001.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    BankComponent,
    ZippyComponent,
    Tri001Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
