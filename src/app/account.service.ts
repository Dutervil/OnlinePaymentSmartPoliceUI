import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor( private  http:HttpClient) { }
 URL:any="http://localhost:8181/smartPolice/api/v1/accounts/";
  createAccount(data:any){
    return this.http.post(this.URL+"create",data);
  }
  login(data:any){
    return this.http.post(this.URL+"login",data);
  }
}
