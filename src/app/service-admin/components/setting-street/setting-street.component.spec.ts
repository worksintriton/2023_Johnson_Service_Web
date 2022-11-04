import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingStreetComponent } from './setting-street.component';

describe('SettingStreetComponent', () => {
  let component: SettingStreetComponent;
  let fixture: ComponentFixture<SettingStreetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingStreetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingStreetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
