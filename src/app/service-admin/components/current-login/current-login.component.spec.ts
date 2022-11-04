import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentLoginComponent } from './current-login.component';

describe('CurrentLoginComponent', () => {
  let component: CurrentLoginComponent;
  let fixture: ComponentFixture<CurrentLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
