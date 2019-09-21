/**
 * Created By : Lalit
 * Created On : 9/21/19
 */

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BaseComponent} from './base/base.component';
import {HttpClientModule} from "@angular/common/http";
import {CardComponent} from './card/card.component';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    CardComponent
  ],
  imports: [
    BrowserModule, CommonModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
