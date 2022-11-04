import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAddserviceComponent } from './service-addservice.component';

describe('ServiceAddserviceComponent', () => {
  let component: ServiceAddserviceComponent;
  let fixture: ComponentFixture<ServiceAddserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceAddserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceAddserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
