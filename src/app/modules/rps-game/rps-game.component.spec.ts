import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpsGameComponent } from './rps-game.component';

describe('RpsGameComponent', () => {
  let component: RpsGameComponent;
  let fixture: ComponentFixture<RpsGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RpsGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RpsGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
