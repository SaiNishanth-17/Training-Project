import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernameNav } from './username-nav';

describe('UsernameNav', () => {
  let component: UsernameNav;
  let fixture: ComponentFixture<UsernameNav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsernameNav]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsernameNav);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
