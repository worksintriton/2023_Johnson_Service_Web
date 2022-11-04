import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceServiceComponent } from './service-service.component';

describe('ServiceServiceComponent', () => {
  let component: ServiceServiceComponent;
  let fixture: ComponentFixture<ServiceServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
