import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewjoblistdetailsComponent } from './newjoblistdetails.component';

describe('NewjoblistdetailsComponent', () => {
  let component: NewjoblistdetailsComponent;
  let fixture: ComponentFixture<NewjoblistdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewjoblistdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewjoblistdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
