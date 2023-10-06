import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocationFinderComponent } from './location-finder.component';

describe('LocationFinderComponent', () => {
  let component: LocationFinderComponent;
  let fixture: ComponentFixture<LocationFinderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationFinderComponent]
    });
    fixture = TestBed.createComponent(LocationFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    const fixture = TestBed.createComponent(LocationFinderComponent);
    expect(component).toBeTruthy();
  });
  it('should render title', () => {
    const fixture = TestBed.createComponent(LocationFinderComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('location-checker app is running!');
  });
});
