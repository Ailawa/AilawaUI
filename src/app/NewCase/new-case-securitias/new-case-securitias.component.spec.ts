import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCaseSecuritiasComponent } from './new-case-securitias.component';

describe('NewCaseSecuritiasComponent', () => {
  let component: NewCaseSecuritiasComponent;
  let fixture: ComponentFixture<NewCaseSecuritiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCaseSecuritiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCaseSecuritiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
