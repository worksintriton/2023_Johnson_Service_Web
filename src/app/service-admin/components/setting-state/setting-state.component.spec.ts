import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingStateComponent } from './setting-state.component';

describe('SettingStateComponent', () => {
  let component: SettingStateComponent;
  let fixture: ComponentFixture<SettingStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
