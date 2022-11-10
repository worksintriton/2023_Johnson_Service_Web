import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LrServiceComponent } from './lr-service.component';

describe('LrServiceComponent', () => {
  let component: LrServiceComponent;
  let fixture: ComponentFixture<LrServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LrServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LrServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
