import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubAdminPartsReplacementComponent } from './sub-admin-parts-replacement.component';

describe('SubAdminPartsReplacementComponent', () => {
  let component: SubAdminPartsReplacementComponent;
  let fixture: ComponentFixture<SubAdminPartsReplacementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubAdminPartsReplacementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubAdminPartsReplacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
