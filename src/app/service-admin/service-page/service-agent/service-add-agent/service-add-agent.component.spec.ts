import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAddAgentComponent } from './service-add-agent.component';

describe('ServiceAddAgentComponent', () => {
  let component: ServiceAddAgentComponent;
  let fixture: ComponentFixture<ServiceAddAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceAddAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceAddAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
