import { TestBed } from '@angular/core/testing';
import { ExamDataService } from './exam-data-service';
 
describe('ExamDataService', () => {
  let service: ExamDataService;
 
  beforeEach(() => {
    service = new ExamDataService();
  });
 
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
 
  describe('setData()', () => {
    it('should store answers and questions', () => {
      const mockAnswers = ['A', 'B', 'C'];
      const mockQuestions = [
        { question: 'Q1', answer: 'A' },
        { question: 'Q2', answer: 'B' },
        { question: 'Q3', answer: 'C' }
      ];
 
      service.setData(mockAnswers, mockQuestions);
 
      expect(service.getAnswers()).toEqual(mockAnswers);
      expect(service.getQuestions()).toEqual(mockQuestions);
    });
  });
 
  describe('setTime() and getTime()', () => {
    it('should store and retrieve exam time', () => {
      service.setTime(30);
      expect(service.getTime()).toBe(30);
    });
 
    it('should handle numeric time values', () => {
      service.setTime(45);
      expect(service.getTime()).toBe(45);
    });
  });
 
  describe('getAnswers()', () => {
    it('should return empty array by default', () => {
      expect(service.getAnswers()).toEqual([]);
    });
  });
 
  describe('getQuestions()', () => {
    it('should return empty array by default', () => {
      expect(service.getQuestions()).toEqual([]);
    });
  });
});