
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { Test } from '../../model/Test';
import { TestService } from '../../services/Test.service';
import { Router } from '@angular/router';
import { resp } from '../../model/resp';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  tests: Observable<Test[]>;
  listComponent:  IndexComponent;
   selected:number=0;
   public currentCompany;
   respt:resp[];






   public selectCompany(event: any, item: any) {
    this.selected=0;
    this.currentCompany = item.nom;
  }


 constructor(public authService: AuthService,private TestService: TestService,public router:Router) { }

  ngOnInit() {
    this.reloadData();
  }



  
  logOut() {
    this.authService.logOut()
      .subscribe(
        data => {
          this.router.navigate(['/login']);
        },
        error => {

        });
  }

  reloadData() { 
    
    this.tests = this.TestService.getTests();
 

  }

  deletetest(test:Test) {
    
    this.TestService.deleteTest(test.id)
      .subscribe(
        data => {
         
          this.reloadData();
        },
        error => console.log(error));
  }
  

  editTest(test: Test): void {
    localStorage.removeItem("editTestId");
    localStorage.setItem("editTestId", test.id.toString());
   
  };
  
  LunchTest(test:Test): void {
    this.TestService.lunchTest(test)
    .subscribe(
      data => {
     
      this.reloadData();
       if(data=="success")
        this.selected=1;
        else {
        this.selected=-1;
       
        }
    
        

      },
     
      );

    
   };
  
}
