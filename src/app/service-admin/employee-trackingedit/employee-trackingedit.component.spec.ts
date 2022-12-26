import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTrackingeditComponent } from './employee-trackingedit.component';

describe('EmployeeTrackingeditComponent', () => {
  let component: EmployeeTrackingeditComponent;
  let fixture: ComponentFixture<EmployeeTrackingeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeTrackingeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeTrackingeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
