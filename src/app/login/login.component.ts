// @ts-ignore

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AccountService} from "../account.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private service:AccountService) {
  }

  // @ts-ignore
  loginForm: FormGroup;

  ngOnInit(): void {
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
}
