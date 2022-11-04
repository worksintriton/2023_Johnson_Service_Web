import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoininspectionJobListComponent } from './joininspection-job-list.component';

describe('JoininspectionJobListComponent', () => {
  let component: JoininspectionJobListComponent;
  let fixture: ComponentFixture<JoininspectionJobListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoininspectionJobListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoininspectionJobListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
