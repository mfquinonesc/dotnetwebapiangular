import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookstableComponent } from './bookstable.component';

describe('BookstableComponent', () => {
  let component: BookstableComponent;
  let fixture: ComponentFixture<BookstableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookstableComponent]
    });
    fixture = TestBed.createComponent(BookstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
