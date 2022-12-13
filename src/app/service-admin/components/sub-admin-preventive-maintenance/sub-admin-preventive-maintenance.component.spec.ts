import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubAdminPreventiveMaintenanceComponent } from './sub-admin-preventive-maintenance.component';

describe('SubAdminPreventiveMaintenanceComponent', () => {
  let component: SubAdminPreventiveMaintenanceComponent;
  let fixture: ComponentFixture<SubAdminPreventiveMaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubAdminPreventiveMaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubAdminPreventiveMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
