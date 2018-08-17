
import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { 
  NavigationStart, NavigationCancel, NavigationEnd 
} from '@angular/router';

import { Test } from '../../model/Test';
import { TestService } from '../../services/Test.service';
import { Router } from '@angular/router';
import { resp } from '../../model/resp';
import { AuthService } from '../../services/auth.service';
import { NgProgress } from 'ngx-progressbar';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  tests: Observable<Test[]>;
  check:Test[]=[];
  listComponent:  IndexComponent;
   selected:number=0;
   selectedall:number=0;
   public currentCompany;
   respt:resp[];
   tests_array:Test[];
   j:number
   selectedrow:number[]=[];
index:number[]=[];



   public selectCompany(event: any, item: any) {
    this.selected=0;
    this.currentCompany = item.nom;
  }


 constructor(public ngProgress: NgProgress,public authService: AuthService,private TestService: TestService,public router:Router) 
 
 {  this.reloadData()}

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
  LunchTest2(test:Test,i:number): void {
    
  
   
  
    this.TestService.lunchTest(test)
    .subscribe(
      data => {
      
      this.reloadData();
       if(data=="success")
       {
          this.selected=1;
        this.selectedrow[i]=1;
      }
        else {
      {  this.selected=-1;
        this.selectedrow[i]=-1;
      }      
        }
      },
     
      );    


   };
 
  LunchTest(test:Test,i:number): void {
 
     this.ngProgress.start();
  
    this.TestService.lunchTest(test)
    .subscribe(
      data => {
      
      this.reloadData();
       if(data=="success")
       {
          this.selected=1;
        this.selectedrow[i]=1;
      }
        else {
      {  this.selected=-1;
        this.selectedrow[i]=-1;
      }
       
        }

      
        this.ngProgress.done(); 

      },
     
      );
     


   };


   lunchAll() :void {
  
        for(this.j=0;this.j<this.check.length-1;this.j++)
        {

         this. LunchTest2(this.check[this.j],this.index[this.j]) ;
        }
        this. LunchTest(this.check[this.check.length-1],this.index[this.check.length-1])


        console.log(this.selectedrow);
       
        this.index=[];
     this.selectedrow=[];
     this.check=[];
       console.log("***************************");
      
   //  this.ngProgress.done(); 
     //   this.reloadData();
     
      
    
  }

  checkbox(test:Test,e,i){

if(e.target.checked)
    {this.check.push(test);
    this.index.push(i);
    }

    
 else
 { 
  for(this.j=0;this.j<this.check.length;this.j++)
  if(this.check[this.j]==test)
  {
this.check.splice(this.j,1);
this.index.splice(this.j,1);
  }

}
console.log(this.check);

  
    }
}