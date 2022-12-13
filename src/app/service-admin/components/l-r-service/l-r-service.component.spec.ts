import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LRServiceComponent } from './l-r-service.component';

describe('LRServiceComponent', () => {
  let component: LRServiceComponent;
  let fixture: ComponentFixture<LRServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LRServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LRServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
