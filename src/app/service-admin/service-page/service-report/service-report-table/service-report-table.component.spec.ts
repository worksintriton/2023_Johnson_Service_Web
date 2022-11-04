import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceReportTableComponent } from './service-report-table.component';

describe('ServiceReportTableComponent', () => {
  let component: ServiceReportTableComponent;
  let fixture: ComponentFixture<ServiceReportTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceReportTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceReportTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
