import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamSubtopicManager } from './exam-subtopic-manager';

describe('ExamSubtopicManager', () => {
  let component: ExamSubtopicManager;
  let fixture: ComponentFixture<ExamSubtopicManager>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamSubtopicManager]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamSubtopicManager);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
