import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {CreateAccountComponent} from "./create-account/create-account.component";
import {AvisComponent} from "./avis/avis.component";
import {ProfileComponent} from "./profile/profile.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signin', component: LoginComponent },
  { path: 'signup', component: CreateAccountComponent },
  { path: 'avis', component: AvisComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) ,
  ]
})
export class AppRoutingModule { }
