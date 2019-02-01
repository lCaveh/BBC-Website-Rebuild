import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { PrimaryNavComponent } from './primary-nav/primary-nav.component';
import { SubNavComponent } from './sub-nav/sub-nav.component';
import { HomeComponent } from './home/home.component';

import { RouterModule, Routes } from '@angular/router';
import { MainArticleComponent } from './main-article/main-article.component';
import { SideArticleComponent } from './side-article/side-article.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: 'home',pathMatch: 'full'}
]

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    PrimaryNavComponent,
    SubNavComponent,
    HomeComponent,
    MainArticleComponent,
    SideArticleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
