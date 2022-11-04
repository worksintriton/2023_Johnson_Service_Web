import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceReportComponent } from './service-report.component';

describe('ServiceReportComponent', () => {
  let component: ServiceReportComponent;
  let fixture: ComponentFixture<ServiceReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
