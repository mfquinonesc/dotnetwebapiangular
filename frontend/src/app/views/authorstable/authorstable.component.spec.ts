import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorstableComponent } from './authorstable.component';

describe('AuthorstableComponent', () => {
  let component: AuthorstableComponent;
  let fixture: ComponentFixture<AuthorstableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorstableComponent]
    });
    fixture = TestBed.createComponent(AuthorstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
