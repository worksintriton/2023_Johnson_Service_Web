import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewgroupdetailsComponent } from './newgroupdetails.component';

describe('NewgroupdetailsComponent', () => {
  let component: NewgroupdetailsComponent;
  let fixture: ComponentFixture<NewgroupdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewgroupdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewgroupdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
