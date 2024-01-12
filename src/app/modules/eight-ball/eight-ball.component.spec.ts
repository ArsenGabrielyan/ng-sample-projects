import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EightBallComponent } from './eight-ball.component';

describe('EightBallComponent', () => {
  let component: EightBallComponent;
  let fixture: ComponentFixture<EightBallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EightBallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EightBallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
