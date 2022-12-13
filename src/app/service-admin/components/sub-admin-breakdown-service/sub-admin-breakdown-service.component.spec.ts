import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubAdminBreakdownServiceComponent } from './sub-admin-breakdown-service.component';

describe('SubAdminBreakdownServiceComponent', () => {
  let component: SubAdminBreakdownServiceComponent;
  let fixture: ComponentFixture<SubAdminBreakdownServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubAdminBreakdownServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubAdminBreakdownServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
