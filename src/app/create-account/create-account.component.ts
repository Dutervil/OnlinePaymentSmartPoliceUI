import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  // @ts-ignore
  signupForm: FormGroup ;

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.signupForm=this.fb.group({
      username:[null,Validators.required],
      firstName:[null,Validators.required],
      lastName:[null,Validators.required],
      permis:[null,Validators.required],
      password:[null,Validators.required],
      confirmPassword:[null,Validators.required]
    })
  }

  save() {
    const username=this.signupForm.get("username")?.value;
    const firstName=this.signupForm.get("firstName")?.value;
    const lastName=this.signupForm.get("lastName")?.value;
    const permis=this.signupForm.get("permis")?.value;
    // @ts-ignore
    const password=this.signupForm.get("password")?.value;

    const confirmPassword=this.signupForm.get("confirmPassword")?.value;
    if(username =='' || firstName == '' || lastName == ''
      || permis == '' || password == '' || confirmPassword == '' ){
alert("Certains champs ne sont pas bien remplis")
    }

  }
}
