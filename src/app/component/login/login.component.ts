import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {User} from "../../model/user";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  user: User=new User();
  errorMessage:string;
  currentUser ;
  constructor(private authService :AuthService, private router: Router) { }



  ngOnInit() {
  }

  login(){

    this.authService.logIn(this.user)
      .subscribe(data=>{
        
        //console.log(this.user.role);
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

        if (this.currentUser.role =="ADMIN") 
        { this.router.navigate(['/index']);}
        else if (this.currentUser.role=="MANAGER")
         {this.router.navigate(['/index_Manager']);}
         //this.router.navigate(['/test']);
        },err=>{
        this.errorMessage="error :  Username or password is incorrect";
        }
      )
  }
}
