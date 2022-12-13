import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportLrComponent } from './report-lr.component';

describe('ReportLrComponent', () => {
  let component: ReportLrComponent;
  let fixture: ComponentFixture<ReportLrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportLrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportLrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
