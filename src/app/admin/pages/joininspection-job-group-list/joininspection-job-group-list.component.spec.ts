import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoininspectionJobGroupListComponent } from './joininspection-job-group-list.component';

describe('JoininspectionJobGroupListComponent', () => {
  let component: JoininspectionJobGroupListComponent;
  let fixture: ComponentFixture<JoininspectionJobGroupListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoininspectionJobGroupListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoininspectionJobGroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
