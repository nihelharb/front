import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { Test } from '../../model/Test';
import { TestService } from '../../services/Test.service';
import { Router } from '@angular/router';
import { resp } from '../../model/resp';

@Component({
  selector: 'list-test',
  templateUrl: './list-test.component.html',
  styleUrls: ['./list-test.component.css']
})
export class ListTestComponent implements OnInit {
  tests: Observable<Test[]>;
  listComponent: ListTestComponent;
   selected:number=0;
   public currentCompany;
   respt:resp[];



   public selectCompany(event: any, item: any) {
    this.selected=0;
    this.currentCompany = item.nom;
  }


 constructor(private TestService: TestService,public router:Router) { }

  ngOnInit() {
    this.reloadData();
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
