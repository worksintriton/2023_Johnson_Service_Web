import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceMangementComponent } from './attendance-mangement.component';

describe('AttendanceMangementComponent', () => {
  let component: AttendanceMangementComponent;
  let fixture: ComponentFixture<AttendanceMangementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendanceMangementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceMangementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
