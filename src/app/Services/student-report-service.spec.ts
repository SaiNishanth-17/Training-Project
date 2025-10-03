//AvailableExamSevice.spects
import { TestBed } from '@angular/core/testing';
import { StudentServices } from './AvailableExamService';
import { completedExams } from '../Models/completedExams';
 
describe('StudentServices', () => {
  let service: StudentServices;
 
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentServices);
  });
 
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
 
  it('should return all exams', () => {
    const exams = service.getAllExams();
    expect(exams.length).toBe(4);
  });
  
 
  it('should have unique IDs for each exam', () => {
    const ids = service.getAllExams().map(e => e.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });
});