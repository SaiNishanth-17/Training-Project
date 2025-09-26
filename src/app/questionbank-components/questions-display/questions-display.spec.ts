import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsDisplay } from './questions-display';

describe('QuestionsDisplay', () => {
  let component: QuestionsDisplay;
  let fixture: ComponentFixture<QuestionsDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionsDisplay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionsDisplay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
