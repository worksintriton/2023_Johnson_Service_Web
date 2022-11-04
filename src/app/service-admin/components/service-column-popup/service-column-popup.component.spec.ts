import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceColumnPopupComponent } from './service-column-popup.component';

describe('ServiceColumnPopupComponent', () => {
  let component: ServiceColumnPopupComponent;
  let fixture: ComponentFixture<ServiceColumnPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceColumnPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceColumnPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
