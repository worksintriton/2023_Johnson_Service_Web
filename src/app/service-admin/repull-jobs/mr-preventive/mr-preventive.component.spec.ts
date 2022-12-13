import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MrPreventiveComponent } from './mr-preventive.component';

describe('MrPreventiveComponent', () => {
  let component: MrPreventiveComponent;
  let fixture: ComponentFixture<MrPreventiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MrPreventiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MrPreventiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
