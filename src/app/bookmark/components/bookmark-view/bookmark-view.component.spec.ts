import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkViewComponent } from './bookmark-view.component';

describe('BookmarkViewComponent', () => {
  let component: BookmarkViewComponent;
  let fixture: ComponentFixture<BookmarkViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookmarkViewComponent]
    });
    fixture = TestBed.createComponent(BookmarkViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
