import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataentryDetailComponent } from './dataentry-detail.component';

describe('DataentryDetailComponent', () => {
  let component: DataentryDetailComponent;
  let fixture: ComponentFixture<DataentryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataentryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataentryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
