import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartReplacementComponent } from './part-replacement.component';

describe('PartReplacementComponent', () => {
  let component: PartReplacementComponent;
  let fixture: ComponentFixture<PartReplacementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartReplacementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartReplacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
