import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsAdmindashboard } from './analytics-admindashboard';

describe('AnalyticsAdmindashboard', () => {
  let component: AnalyticsAdmindashboard;
  let fixture: ComponentFixture<AnalyticsAdmindashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyticsAdmindashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyticsAdmindashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
