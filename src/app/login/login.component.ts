// @ts-ignore

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AccountService} from "../account.service";
import {FacebookLoginProvider, GoogleLoginProvider, SocialAuthService} from "angularx-social-login";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private service:AccountService,
              private router:Router,
              private authService: SocialAuthService) {
  }

  // @ts-ignore
  loginForm: FormGroup;

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(user)
      this.loggedIn = user != null;
    });
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    })

  }

  login() {
    this.service.login((this.loginForm.value)).subscribe(
      resp =>{
        console.log("Login Response",resp)
      }
    )
  }

  public user: any;
  public loggedIn!: boolean;
    signInHandler() {
      this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
      return;
      this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((data) => {
        localStorage.setItem('google_auth', JSON.stringify(data));
        console.log("Auth Data:",data);
        this.router.navigateByUrl('/').then();
      });
    }
  //Logion
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  // Logout Function
  signOut(): void {
    this.authService.signOut();
  }
}
