import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingAreaComponent } from './setting-area.component';

describe('SettingAreaComponent', () => {
  let component: SettingAreaComponent;
  let fixture: ComponentFixture<SettingAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
