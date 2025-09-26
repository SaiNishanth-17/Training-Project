import { TestBed } from '@angular/core/testing';
import { Question } from '../Models/question';
import { QuestionbankServices } from './questionbank-services';
 
 
describe('QuestionbankServices', () => {
  let service: QuestionbankServices;
 
  const mockQuestions :Question[]= [
    { id: 1, text: 'HTML', difficulty: 'Easy', subtopics: ['Basics'], options: ['A', 'B'], correctAnswerIndex: 0 },
    { id: 2, text: 'CSS', difficulty: 'Medium', subtopics: ['Basics'], options: ['A', 'B'], correctAnswerIndex: 0 }
  ];
 
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionbankServices);
    (service as any).questionsByCourse = [{ courseName: 'Test', questions: [...mockQuestions] }];
  });
 
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
 
  it('should get questions for a course', () => {
    const questions = service.getQuestionsForCourse('Test');
    expect(questions.length).toBe(2);
    expect(questions[0].text).toBe('HTML');
  });
 
  it('should correctly save an existing question', () => {
    const updatedQuestion = { ...mockQuestions[0], text: 'Updated HTML', correctAnswerIndex: 1 };
    service.saveQuestion(updatedQuestion, 'Test');
 
    const updatedQuestions = service.getQuestionsForCourse('Test');
    expect(updatedQuestions[0].text).toBe('Updated HTML');
    expect(updatedQuestions[0].correctAnswerIndex).toBe(1);
  });
 
  it('should correctly delete a question', () => {
    service.deleteQuestion(1, 'Test');
    const remainingQuestions = service.getQuestionsForCourse('Test');
    expect(remainingQuestions.length).toBe(1);
    expect(remainingQuestions[0].text).toBe('CSS');
  });
 
  it('should deep clone a question', () => {
    const originalQuestion = { ...mockQuestions[0] };
    const clonedQuestion = (service as any).deepCloneQuestion(originalQuestion);
 
    expect(clonedQuestion).toEqual(originalQuestion);
    expect(clonedQuestion).not.toBe(originalQuestion);
  });
});
 