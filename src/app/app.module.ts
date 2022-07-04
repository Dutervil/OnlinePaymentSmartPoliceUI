import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { LoginComponent } from './login/login.component';
import { AvisComponent } from './avis/avis.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    CreateAccountComponent,
    LoginComponent,
    AvisComponent,
    ProfileComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
