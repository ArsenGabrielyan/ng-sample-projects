import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChecklistNgxsComponent } from './checklist-ngxs.component';

describe('ChecklistNgxsComponent', () => {
  let component: ChecklistNgxsComponent;
  let fixture: ComponentFixture<ChecklistNgxsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChecklistNgxsComponent]
    });
    fixture = TestBed.createComponent(ChecklistNgxsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
