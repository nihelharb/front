import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LunchTestComponent } from './lunch-test.component';

describe('LunchTestComponent', () => {
  let component: LunchTestComponent;
  let fixture: ComponentFixture<LunchTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LunchTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LunchTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
