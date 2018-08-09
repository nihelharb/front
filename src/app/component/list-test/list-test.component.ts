import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { Test } from '../../model/Test';
import { TestService } from '../../services/Test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'list-test',
  templateUrl: './list-test.component.html',
  styleUrls: ['./list-test.component.css']
})
export class ListTestComponent implements OnInit {
  tests: Observable<Test[]>;
  listComponent: ListTestComponent;
   selected:number;
   date:String;
   time:String;



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
    
     console.log(data);
 
      if(data=="success")
        this.selected=1;
        else {
        this.selected=0;
       
        }
    
        this.reloadData();

      },
     
      );

    
   };
  
 

}
