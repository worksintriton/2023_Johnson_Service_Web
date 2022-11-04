import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSettingComponent } from './service-setting.component';

describe('ServiceSettingComponent', () => {
  let component: ServiceSettingComponent;
  let fixture: ComponentFixture<ServiceSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
