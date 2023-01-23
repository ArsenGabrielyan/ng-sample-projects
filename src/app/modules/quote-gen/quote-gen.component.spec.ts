import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteGenComponent } from './quote-gen.component';

describe('QuoteGenComponent', () => {
  let component: QuoteGenComponent;
  let fixture: ComponentFixture<QuoteGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteGenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuoteGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
