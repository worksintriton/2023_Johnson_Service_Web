import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsReplacementComponent } from './parts-replacement.component';

describe('PartsReplacementComponent', () => {
  let component: PartsReplacementComponent;
  let fixture: ComponentFixture<PartsReplacementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartsReplacementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartsReplacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
