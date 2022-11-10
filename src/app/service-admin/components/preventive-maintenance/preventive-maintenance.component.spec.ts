import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreventiveMaintenanceComponent } from './preventive-maintenance.component';

describe('PreventiveMaintenanceComponent', () => {
  let component: PreventiveMaintenanceComponent;
  let fixture: ComponentFixture<PreventiveMaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreventiveMaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreventiveMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
