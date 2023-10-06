import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputMentionComponent } from './input-mention.component';

describe('InputMentionComponent', () => {
  let component: InputMentionComponent;
  let fixture: ComponentFixture<InputMentionComponent>;

  beforeEach(async () => {
    component = fixture.componentInstance
    await TestBed.configureTestingModule({
      declarations: [
        InputMentionComponent
      ],
    }).compileComponents();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
