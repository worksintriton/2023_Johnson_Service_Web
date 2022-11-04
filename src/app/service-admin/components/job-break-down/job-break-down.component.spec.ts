import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobBreakDownComponent } from './job-break-down.component';

describe('JobBreakDownComponent', () => {
  let component: JobBreakDownComponent;
  let fixture: ComponentFixture<JobBreakDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobBreakDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobBreakDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
