import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobNoManagmentComponent } from './job-no-managment.component';

describe('JobNoManagmentComponent', () => {
  let component: JobNoManagmentComponent;
  let fixture: ComponentFixture<JobNoManagmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobNoManagmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobNoManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
