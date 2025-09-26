import { TestBed } from '@angular/core/testing';

import { AdminReportServices } from './admin-report-services';

describe('AdminReportServices', () => {
  let service: AdminReportServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminReportServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the correct number of students', () => {
    expect(service.numberOfStudents()).toBe(5); 
  });

  it('should return the correct number of exams', () => {
    expect(service.numberOfExamsAvailable()).toBe(4); 
  });

  it('should calculate the correct average score across all students', () => {
    const avg = service.averageScore();
    
    expect(avg).toBe(83);
  });

  it('should return correct score analytics for each student', () => {
    const analytics = service.getScoreAnalytics();

    expect(analytics.length).toBe(5);

    const alice = analytics.find(a => a.name === 'Alice');
    expect(alice?.average).toBeCloseTo(79.67, 2); 
    expect(alice?.passrate).toBeCloseTo(66.67, 2); 

    const bob = analytics.find(a => a.name === 'Bob');
    expect(bob?.average).toBeCloseTo(86.33, 2);
    expect(bob?.passrate).toBeCloseTo(100, 2); 
  });
});
