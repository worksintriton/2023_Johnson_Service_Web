import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationPopSendComponent } from './notification-pop-send.component';

describe('NotificationPopSendComponent', () => {
  let component: NotificationPopSendComponent;
  let fixture: ComponentFixture<NotificationPopSendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationPopSendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationPopSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
