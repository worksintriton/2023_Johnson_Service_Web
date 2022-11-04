import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceLocationComponent } from './service-location.component';

describe('ServiceLocationComponent', () => {
  let component: ServiceLocationComponent;
  let fixture: ComponentFixture<ServiceLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
