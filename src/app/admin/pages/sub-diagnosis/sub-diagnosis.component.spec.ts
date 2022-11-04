import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubDiagnosisComponent } from './sub-diagnosis.component';

describe('SubDiagnosisComponent', () => {
  let component: SubDiagnosisComponent;
  let fixture: ComponentFixture<SubDiagnosisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubDiagnosisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubDiagnosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
