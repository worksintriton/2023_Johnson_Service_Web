import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceNavBarComponent } from './service-nav-bar.component';

describe('ServiceNavBarComponent', () => {
  let component: ServiceNavBarComponent;
  let fixture: ComponentFixture<ServiceNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
