import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabUsermanagmentComponent } from './tab-usermanagment.component';

describe('TabUsermanagmentComponent', () => {
  let component: TabUsermanagmentComponent;
  let fixture: ComponentFixture<TabUsermanagmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabUsermanagmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabUsermanagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
