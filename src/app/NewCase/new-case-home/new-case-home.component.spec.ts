import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCaseHomeComponent } from './new-case-home.component';

describe('NewCaseHomeComponent', () => {
  let component: NewCaseHomeComponent;
  let fixture: ComponentFixture<NewCaseHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCaseHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCaseHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
