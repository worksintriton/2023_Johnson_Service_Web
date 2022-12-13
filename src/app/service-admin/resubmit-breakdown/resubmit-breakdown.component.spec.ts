import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResubmitBreakdownComponent } from './resubmit-breakdown.component';

describe('ResubmitBreakdownComponent', () => {
  let component: ResubmitBreakdownComponent;
  let fixture: ComponentFixture<ResubmitBreakdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResubmitBreakdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResubmitBreakdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
