import { TestBed } from '@angular/core/testing';
import { ExamQuestionsService } from './exam-questions-service';
 
describe('ExamQuestionsService', () => {
  let service: ExamQuestionsService;
 
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamQuestionsService);
  });
 
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
 
  describe('getExamTopics()', () => {
    it('should return all exam topics', () => {
      const topics = service.getExamTopics();
      expect(topics.length).toBe(4);
      expect(topics[0].name).toBe('HTML');
      expect(topics[1].time).toBe(20);
    });
  });
 
  describe('getHtmlQuestions()', () => {
    it('should return HTML questions', () => {
      const questions = service.getHtmlQuestions();
      expect(questions.length).toBe(10);
      expect(questions[0].question).toContain('HTML');
      expect(questions[0].answer).toBe('Hyper Text Markup Language');
    });
  });
 
  describe('getCssQuestions()', () => {
    it('should return CSS questions', () => {
      const questions = service.getCssQuestions();
      expect(questions.length).toBe(10);
      expect(questions[0].answer).toBe('Cascading Style Sheets');
    });
  });
 
  describe('getJavascriptQuestions()', () => {
    it('should return JavaScript questions', () => {
      const questions = service.getJavascriptQuestions();
      expect(questions.length).toBe(10);
      expect(questions[0].answer).toBe('Both var and let');
    });
  });
 
  describe('getBootstrapQuestions()', () => {
    it('should return Bootstrap questions', () => {
      const questions = service.getBootstrapQuestions();
      expect(questions.length).toBe(10);
      expect(questions[0].answer).toBe('Responsive web design');
    });
  });
});
 