import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions,Response} from '@angular/http';
import {User} from "../model/user";
import 'rxjs/add/operator/map';
import {AppComponent} from "../app.component";
@Injectable({providedIn : "root"})
export class AuthService {
  constructor(public http: Http) { }

  public logIn(user: User){

    let headers = new Headers();
    headers.append('Accept', 'application/json')
    // creating base64 encoded String from user name and password
    var base64Credential: string = btoa( user.username+ ':' + user.password);
    headers.append("Authorization", "Basic " + base64Credential);
  


    let options = new RequestOptions();
    options.headers=headers;

    return this.http.get(AppComponent.API_URL+"/account/login" ,   options)
      .map((response: Response) => {
        console.log(response);
      // login successful if there's a jwt token in the response
      let user = response.json().principal;// the returned user object is a principal object
      console.log(user);
      if (user) {
     
        // store user details  in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
      }
      else
      console.log("erreur");
    });
  }

  logOut() {
    // remove user from local storage to log user out
    return this.http.post(AppComponent.API_URL+"logout",{})
      .map((response: Response) => {
        localStorage.removeItem('currentUser');
      });

  }
}
