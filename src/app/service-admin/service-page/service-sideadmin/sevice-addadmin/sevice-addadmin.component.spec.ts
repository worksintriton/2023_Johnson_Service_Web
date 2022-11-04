import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeviceAddadminComponent } from './sevice-addadmin.component';

describe('SeviceAddadminComponent', () => {
  let component: SeviceAddadminComponent;
  let fixture: ComponentFixture<SeviceAddadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeviceAddadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeviceAddadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
