import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubAdminLRServiceComponent } from './sub-admin-lr-service.component';

describe('SubAdminLRServiceComponent', () => {
  let component: SubAdminLRServiceComponent;
  let fixture: ComponentFixture<SubAdminLRServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubAdminLRServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubAdminLRServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
