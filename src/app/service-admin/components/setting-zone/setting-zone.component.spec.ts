import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingZoneComponent } from './setting-zone.component';

describe('SettingZoneComponent', () => {
  let component: SettingZoneComponent;
  let fixture: ComponentFixture<SettingZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
