import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelServiceComponent } from './excel-service.component';

describe('ExcelServiceComponent', () => {
  let component: ExcelServiceComponent;
  let fixture: ComponentFixture<ExcelServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcelServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
