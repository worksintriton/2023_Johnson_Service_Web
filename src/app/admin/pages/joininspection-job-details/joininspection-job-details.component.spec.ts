import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoininspectionJobDetailsComponent } from './joininspection-job-details.component';

describe('JoininspectionJobDetailsComponent', () => {
  let component: JoininspectionJobDetailsComponent;
  let fixture: ComponentFixture<JoininspectionJobDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoininspectionJobDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoininspectionJobDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
