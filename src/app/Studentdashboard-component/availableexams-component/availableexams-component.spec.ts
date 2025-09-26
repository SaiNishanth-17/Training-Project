import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableexamsComponent } from './availableexams-component';

describe('AvailableexamsComponent', () => {
  let component: AvailableexamsComponent;
  let fixture: ComponentFixture<AvailableexamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailableexamsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailableexamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
