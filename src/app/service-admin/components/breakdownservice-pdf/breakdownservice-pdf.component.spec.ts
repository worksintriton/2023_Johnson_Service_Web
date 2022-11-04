import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakdownservicePdfComponent } from './breakdownservice-pdf.component';

describe('BreakdownservicePdfComponent', () => {
  let component: BreakdownservicePdfComponent;
  let fixture: ComponentFixture<BreakdownservicePdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakdownservicePdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakdownservicePdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
