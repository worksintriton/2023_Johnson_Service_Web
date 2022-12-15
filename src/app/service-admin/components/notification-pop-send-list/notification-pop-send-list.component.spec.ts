import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationPopSendListComponent } from './notification-pop-send-list.component';

describe('NotificationPopSendListComponent', () => {
  let component: NotificationPopSendListComponent;
  let fixture: ComponentFixture<NotificationPopSendListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationPopSendListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationPopSendListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
