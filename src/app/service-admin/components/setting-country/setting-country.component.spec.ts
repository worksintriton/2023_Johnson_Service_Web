import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingCountryComponent } from './setting-country.component';

describe('SettingCountryComponent', () => {
  let component: SettingCountryComponent;
  let fixture: ComponentFixture<SettingCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
