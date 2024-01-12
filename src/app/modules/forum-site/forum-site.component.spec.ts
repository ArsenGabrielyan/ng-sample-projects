import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForumSiteComponent } from './forum-site.component';

describe('ForumSiteComponent', () => {
  let component: ForumSiteComponent;
  let fixture: ComponentFixture<ForumSiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForumSiteComponent]
    });
    fixture = TestBed.createComponent(ForumSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
