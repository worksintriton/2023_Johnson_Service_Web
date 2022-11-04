import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingCityComponent } from './setting-city.component';

describe('SettingCityComponent', () => {
  let component: SettingCityComponent;
  let fixture: ComponentFixture<SettingCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
