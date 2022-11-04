import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldManagementComponent } from './field-management.component';

describe('FieldManagementComponent', () => {
  let component: FieldManagementComponent;
  let fixture: ComponentFixture<FieldManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
