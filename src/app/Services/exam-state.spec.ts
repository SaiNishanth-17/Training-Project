import { TestBed } from '@angular/core/testing';

import { ExamState } from '../exam-state';

describe('ExamState', () => {
  let service: ExamState;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamState);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
