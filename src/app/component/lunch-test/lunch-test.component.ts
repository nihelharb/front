import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-lunch-test',
  templateUrl: './lunch-test.component.html',
  styleUrls: ['./lunch-test.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LunchTestComponent implements OnInit {
  //url du test
  url="http://jsonplaceholder.typicode.com/posts";
  param="userId=1";
  constructor(private testService :TestService, private router: Router) { }

  ngOnInit() {

  }

   lunch (){
  
    

  }

}
