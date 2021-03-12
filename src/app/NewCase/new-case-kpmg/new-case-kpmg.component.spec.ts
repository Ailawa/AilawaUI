import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCaseKPMGComponent } from './new-case-kpmg.component';

describe('NewCaseKPMGComponent', () => {
  let component: NewCaseKPMGComponent;
  let fixture: ComponentFixture<NewCaseKPMGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCaseKPMGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCaseKPMGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
