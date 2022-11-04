import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDataentryDetailComponent } from './single-dataentry-detail.component';

describe('SingleDataentryDetailComponent', () => {
  let component: SingleDataentryDetailComponent;
  let fixture: ComponentFixture<SingleDataentryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleDataentryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleDataentryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
