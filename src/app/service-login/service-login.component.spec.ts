import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceLoginComponent } from './service-login.component';

describe('ServiceLoginComponent', () => {
  let component: ServiceLoginComponent;
  let fixture: ComponentFixture<ServiceLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
