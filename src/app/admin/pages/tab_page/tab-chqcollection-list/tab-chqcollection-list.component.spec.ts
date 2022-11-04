import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabChqcollectionListComponent } from './tab-chqcollection-list.component';

describe('TabChqcollectionListComponent', () => {
  let component: TabChqcollectionListComponent;
  let fixture: ComponentFixture<TabChqcollectionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabChqcollectionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabChqcollectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
