import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {User} from "../../model/user";
import {AccountService} from "../../services/account.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {
  role_selected:string;
  user: User = new User();
  errorMessage: string;

  constructor(public accountService: AccountService, public router: Router) {
  }

  ngOnInit() {
  }
  onRoleSelect(event:any){
    this.role_selected=event.target.value;
    
    this.user.role=event.target.value;
      
  }

  register() {
    console.log(this.user);
    if(this.user.role=="") 
    this.user.role="ADMIN";
    this.accountService.createAccount(this.user).subscribe(data => {
      console.log("cbn");
        this.router.navigate(['/login']);
      }, err => {
        console.log("noooooooon");
        console.log(err);
        this.errorMessage = "username already exist";
      }
    )
  }
}
