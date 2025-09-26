import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsStudentPage } from './analytics-student-page';

describe('AnalyticsStudentPage', () => {
  let component: AnalyticsStudentPage;
  let fixture: ComponentFixture<AnalyticsStudentPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyticsStudentPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyticsStudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
