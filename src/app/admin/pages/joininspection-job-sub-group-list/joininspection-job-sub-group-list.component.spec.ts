import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoininspectionJobSubGroupListComponent } from './joininspection-job-sub-group-list.component';

describe('JoininspectionJobSubGroupListComponent', () => {
  let component: JoininspectionJobSubGroupListComponent;
  let fixture: ComponentFixture<JoininspectionJobSubGroupListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoininspectionJobSubGroupListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoininspectionJobSubGroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
