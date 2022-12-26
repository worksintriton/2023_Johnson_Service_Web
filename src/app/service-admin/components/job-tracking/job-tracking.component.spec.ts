import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobTrackingComponent } from './job-tracking.component';

describe('JobTrackingComponent', () => {
  let component: JobTrackingComponent;
  let fixture: ComponentFixture<JobTrackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobTrackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
