import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportAttendanceTableComponent } from './report-attendance-table.component';

describe('ReportAttendanceTableComponent', () => {
  let component: ReportAttendanceTableComponent;
  let fixture: ComponentFixture<ReportAttendanceTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportAttendanceTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportAttendanceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
