import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceSubAdminComponent } from './attendance-sub-admin.component';

describe('AttendanceSubAdminComponent', () => {
  let component: AttendanceSubAdminComponent;
  let fixture: ComponentFixture<AttendanceSubAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendanceSubAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceSubAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
