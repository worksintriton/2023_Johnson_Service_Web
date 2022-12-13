import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MrBreakeDownComponent } from './mr-breake-down.component';

describe('MrBreakeDownComponent', () => {
  let component: MrBreakeDownComponent;
  let fixture: ComponentFixture<MrBreakeDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MrBreakeDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MrBreakeDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
