import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporePreventiveMaintenanceComponent } from './repore-preventive-maintenance.component';

describe('ReporePreventiveMaintenanceComponent', () => {
  let component: ReporePreventiveMaintenanceComponent;
  let fixture: ComponentFixture<ReporePreventiveMaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporePreventiveMaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporePreventiveMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
