import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsReplacementAckPdfComponent } from './parts-replacement-ack-pdf.component';

describe('PartsReplacementAckPdfComponent', () => {
  let component: PartsReplacementAckPdfComponent;
  let fixture: ComponentFixture<PartsReplacementAckPdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartsReplacementAckPdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartsReplacementAckPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
