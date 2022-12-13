import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportBreakdownComponent } from './report-breakdown.component';

describe('ReportBreakdownComponent', () => {
  let component: ReportBreakdownComponent;
  let fixture: ComponentFixture<ReportBreakdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportBreakdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportBreakdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
