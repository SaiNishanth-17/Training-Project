import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamDetailsModal } from './exam-details-modal';

describe('ExamDetailsModal', () => {
  let component: ExamDetailsModal;
  let fixture: ComponentFixture<ExamDetailsModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamDetailsModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamDetailsModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
