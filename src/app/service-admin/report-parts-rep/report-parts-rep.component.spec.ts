import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportPartsRepComponent } from './report-parts-rep.component';

describe('ReportPartsRepComponent', () => {
  let component: ReportPartsRepComponent;
  let fixture: ComponentFixture<ReportPartsRepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportPartsRepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportPartsRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
