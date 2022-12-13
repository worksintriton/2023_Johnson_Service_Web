import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResubmitLRComponent } from './resubmit-lr.component';

describe('ResubmitLRComponent', () => {
  let component: ResubmitLRComponent;
  let fixture: ComponentFixture<ResubmitLRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResubmitLRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResubmitLRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
