import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamTopic } from './exam-topic';

describe('ExamTopic', () => {
  let component: ExamTopic;
  let fixture: ComponentFixture<ExamTopic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamTopic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamTopic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
