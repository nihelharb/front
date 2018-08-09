import { Component, OnInit } from '@angular/core';
import {TestService} from "../../services/Test.service";
import {Router} from "@angular/router";
import {Test} from "../../model/Test";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-edit-test',
  templateUrl: './edit-test.component.html',
  styleUrls: ['./edit-test.component.css']
})
export class EditTestComponent implements OnInit {

  test_nouveau: Test;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private testService: TestService) { }

  ngOnInit() {
    let testId = localStorage.getItem("editTestId");
    if(!testId ) {
      alert("Invalid action.");
      console.log("Invalid action");
      this.router.navigate(['list-test']);
      return;
    }

    this.editForm = this.formBuilder.group({
      id: [],
      nom: ['', Validators.required],
      url: ['', Validators.required],
      parametre: ['', Validators.required],
      temps_rep:['', Validators.required],
      resultat_attendu:['', Validators.required],
      emails:['', Validators.required],

    });


    this.testService.getTestById(testId)
      .subscribe( data => {
        this.editForm.setValue(data);
      });

  }

  onSubmit() {
   this.testService.updateTest(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
         
          this.router.navigate(['index']);
        },
        error => {
          alert(error);
        });
  }

}