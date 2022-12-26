import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceEmployeePopupComponent } from './service-employee-popup.component';

describe('ServiceEmployeePopupComponent', () => {
  let component: ServiceEmployeePopupComponent;
  let fixture: ComponentFixture<ServiceEmployeePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceEmployeePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceEmployeePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
