import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAgentComponent } from './service-agent.component';

describe('ServiceAgentComponent', () => {
  let component: ServiceAgentComponent;
  let fixture: ComponentFixture<ServiceAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
