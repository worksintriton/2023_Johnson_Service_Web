import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldManagementSubgroupComponent } from './field-management-subgroup.component';

describe('FieldManagementSubgroupComponent', () => {
  let component: FieldManagementSubgroupComponent;
  let fixture: ComponentFixture<FieldManagementSubgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldManagementSubgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldManagementSubgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
