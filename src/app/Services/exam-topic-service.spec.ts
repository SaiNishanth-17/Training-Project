import { TestBed } from '@angular/core/testing';

import { ExamTopicService } from './exam-topic-service';

describe('ExamTopicService', () => {
  let service: ExamTopicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamTopicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
