import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamWiseAnalysis } from './exam-wise-analysis';

describe('ExamWiseAnalysis', () => {
  let component: ExamWiseAnalysis;
  let fixture: ComponentFixture<ExamWiseAnalysis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamWiseAnalysis]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamWiseAnalysis);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
