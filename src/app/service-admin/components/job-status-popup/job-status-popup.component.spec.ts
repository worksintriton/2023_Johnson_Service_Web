import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobStatusPopupComponent } from './job-status-popup.component';

describe('JobStatusPopupComponent', () => {
  let component: JobStatusPopupComponent;
  let fixture: ComponentFixture<JobStatusPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobStatusPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobStatusPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
