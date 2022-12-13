import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResubmitPartsreplacementComponent } from './resubmit-partsreplacement.component';

describe('ResubmitPartsreplacementComponent', () => {
  let component: ResubmitPartsreplacementComponent;
  let fixture: ComponentFixture<ResubmitPartsreplacementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResubmitPartsreplacementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResubmitPartsreplacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
