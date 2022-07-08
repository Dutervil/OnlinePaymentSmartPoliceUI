import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AccountService} from "../account.service";
import Swal from "sweetalert2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  constructor(private fb:FormBuilder,
              private router:Router,
              private  accountService: AccountService) { }

  // @ts-ignore
  signupForm: FormGroup ;
  error: any;
  success:any;
  process: boolean=false;

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
    if(username ==null || firstName ==null || lastName ==null
      || permis ==null || password ==null || confirmPassword ==null ){
       this.error="Certains champs ne sont pas bien remplis";
    }else if(password!=confirmPassword){
      this.error="les deux mots de pass ne sont pas identiques";

    }else{
      this.process=true;
      this.accountService.createAccount(this.signupForm.value).subscribe(
        response =>{
          console.log(response)
          // @ts-ignore
          if(response.error==true){
            this.router.navigate(["signin"])
            this.signupForm.reset();
          }else{
            // @ts-ignore
            Swal.fire('Message', response.message, response.error==true?'success':'error')
          }
          this.error=""
          // @ts-ignore

          this.process=false;
        }
      )

    }

  }
}
