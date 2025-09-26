import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayExams } from './display-exams';

describe('DisplayExams', () => {
  let component: DisplayExams;
  let fixture: ComponentFixture<DisplayExams>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayExams]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayExams);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
