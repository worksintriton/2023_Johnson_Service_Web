import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsReplacementAckComponent } from './parts-replacement-ack.component';

describe('PartsReplacementAckComponent', () => {
  let component: PartsReplacementAckComponent;
  let fixture: ComponentFixture<PartsReplacementAckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartsReplacementAckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartsReplacementAckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
