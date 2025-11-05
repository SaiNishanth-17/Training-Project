import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamSubjects } from './exam-subjects';

describe('ExamSubjects', () => {
  let component: ExamSubjects;
  let fixture: ComponentFixture<ExamSubjects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamSubjects]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamSubjects);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
