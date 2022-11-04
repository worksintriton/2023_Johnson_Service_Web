import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubGroupdetailsComponent } from './sub-groupdetails.component';

describe('SubGroupdetailsComponent', () => {
  let component: SubGroupdetailsComponent;
  let fixture: ComponentFixture<SubGroupdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubGroupdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubGroupdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
