import { Injectable } from '@angular/core';
import {User} from "../model/user";
import {Http} from "@angular/http";
import {AppComponent} from "../app.component";

@Injectable({providedIn : "root"})
export class AccountService {
  baseUrl: string = 'http://localhost:8080/account/register';
  constructor(public http: Http) { }

  createAccount(user:User){
    return this.http.post(this.baseUrl,user)
      .map(resp=>resp.json());
  }
}
