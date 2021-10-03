import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpateStudentComponent } from './upate-student.component';

describe('UpateStudentComponent', () => {
  let component: UpateStudentComponent;
  let fixture: ComponentFixture<UpateStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpateStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpateStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
