import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { PrimaryNavComponent } from './primary-nav/primary-nav.component';



@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    PrimaryNavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
