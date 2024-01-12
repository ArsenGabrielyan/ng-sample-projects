import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColorGenComponent } from './color-gen.component';

describe('ColorGenComponent', () => {
  let component: ColorGenComponent;
  let fixture: ComponentFixture<ColorGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorGenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
