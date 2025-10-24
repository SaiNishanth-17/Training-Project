import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTopic } from './display-topic';

describe('DisplayTopic', () => {
  let component: DisplayTopic;
  let fixture: ComponentFixture<DisplayTopic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayTopic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayTopic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
