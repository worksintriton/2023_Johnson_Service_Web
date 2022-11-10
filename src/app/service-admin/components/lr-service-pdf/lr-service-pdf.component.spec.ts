import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LrServicePdfComponent } from './lr-service-pdf.component';

describe('LrServicePdfComponent', () => {
  let component: LrServicePdfComponent;
  let fixture: ComponentFixture<LrServicePdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LrServicePdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LrServicePdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
