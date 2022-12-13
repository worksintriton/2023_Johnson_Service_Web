import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubAdmnEmployeeComponent } from './sub-admn-employee.component';

describe('SubAdmnEmployeeComponent', () => {
  let component: SubAdmnEmployeeComponent;
  let fixture: ComponentFixture<SubAdmnEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubAdmnEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubAdmnEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
