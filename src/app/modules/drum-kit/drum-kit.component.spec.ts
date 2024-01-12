import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrumKitComponent } from './drum-kit.component';

describe('DrumKitComponent', () => {
  let component: DrumKitComponent;
  let fixture: ComponentFixture<DrumKitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrumKitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrumKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
