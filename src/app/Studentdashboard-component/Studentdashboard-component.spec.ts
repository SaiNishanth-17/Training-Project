import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentdashboardComponent } from './Studentdashboard-component';

describe('DashboardComponent', () => {
  let component: StudentdashboardComponent;
  let fixture: ComponentFixture<StudentdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentdashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
