import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorialstableComponent } from './editorialstable.component';

describe('EditorialstableComponent', () => {
  let component: EditorialstableComponent;
  let fixture: ComponentFixture<EditorialstableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditorialstableComponent]
    });
    fixture = TestBed.createComponent(EditorialstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
