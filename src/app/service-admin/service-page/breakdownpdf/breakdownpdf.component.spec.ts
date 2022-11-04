import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakdownpdfComponent } from './breakdownpdf.component';

describe('BreakdownpdfComponent', () => {
  let component: BreakdownpdfComponent;
  let fixture: ComponentFixture<BreakdownpdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakdownpdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakdownpdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
