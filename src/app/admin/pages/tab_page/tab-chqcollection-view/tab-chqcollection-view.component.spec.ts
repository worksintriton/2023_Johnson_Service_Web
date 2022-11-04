import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabChqcollectionViewComponent } from './tab-chqcollection-view.component';

describe('TabChqcollectionViewComponent', () => {
  let component: TabChqcollectionViewComponent;
  let fixture: ComponentFixture<TabChqcollectionViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabChqcollectionViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabChqcollectionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
