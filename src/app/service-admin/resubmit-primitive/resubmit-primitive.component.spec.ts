import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResubmitPrimitiveComponent } from './resubmit-primitive.component';

describe('ResubmitPrimitiveComponent', () => {
  let component: ResubmitPrimitiveComponent;
  let fixture: ComponentFixture<ResubmitPrimitiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResubmitPrimitiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResubmitPrimitiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
