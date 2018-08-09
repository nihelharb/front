import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TestService} from "../../services/test.service";

import {Router} from "@angular/router";
import { Test } from '../../model/Test';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.css']
})
export class AddTestComponent implements OnInit {

  test: Test = new Test();
  tests: Observable<Test[]>;
  submitted = false;


  constructor(private TestService: TestService,private router: Router) { }


  ngOnInit() {
  }


  newTest(): void {
    this.submitted = false;
    this.test = new Test();
  }
  reloadData() {

    this.tests = this.TestService.getTests();
  }

  save() {
  
  
    this.TestService.createTest(this.test)
      .subscribe(
        data => console.log(data), error => console.log(error));
    this.test = new Test();

    this.router.navigate(['/index']);

  }
  

  onSubmit() {
    this.submitted = true;
    this.save();

  }

}