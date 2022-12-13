import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakeDownComponent } from './breake-down.component';

describe('BreakeDownComponent', () => {
  let component: BreakeDownComponent;
  let fixture: ComponentFixture<BreakeDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakeDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakeDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
