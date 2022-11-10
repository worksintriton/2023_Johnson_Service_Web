import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreventiveMaintenancePdfComponent } from './preventive-maintenance-pdf.component';

describe('PreventiveMaintenancePdfComponent', () => {
  let component: PreventiveMaintenancePdfComponent;
  let fixture: ComponentFixture<PreventiveMaintenancePdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreventiveMaintenancePdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreventiveMaintenancePdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
