import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSideadminComponent } from './service-sideadmin.component';

describe('ServiceSideadminComponent', () => {
  let component: ServiceSideadminComponent;
  let fixture: ComponentFixture<ServiceSideadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceSideadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceSideadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
