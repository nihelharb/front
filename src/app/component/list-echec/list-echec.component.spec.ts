import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {ListEchecComponent } from './list-echec.component';

describe('ListEchecComponent', () => {
  let component: ListEchecComponent;
  let fixture: ComponentFixture<ListEchecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEchecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEchecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
