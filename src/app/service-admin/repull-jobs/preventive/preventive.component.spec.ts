import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreventiveComponent } from './preventive.component';

describe('PreventiveComponent', () => {
  let component: PreventiveComponent;
  let fixture: ComponentFixture<PreventiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreventiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreventiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
