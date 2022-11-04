import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RollManagementComponent } from './roll-management.component';

describe('RollManagementComponent', () => {
  let component: RollManagementComponent;
  let fixture: ComponentFixture<RollManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RollManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RollManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
