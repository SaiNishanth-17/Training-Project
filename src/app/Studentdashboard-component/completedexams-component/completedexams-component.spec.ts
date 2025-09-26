import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedexamsComponent } from './completedexams-component';

describe('CompletedexamsComponent', () => {
  let component: CompletedexamsComponent;
  let fixture: ComponentFixture<CompletedexamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompletedexamsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompletedexamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
