import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastNotifComponent } from './toast-notif.component';

describe('ToastNotifComponent', () => {
  let component: ToastNotifComponent;
  let fixture: ComponentFixture<ToastNotifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToastNotifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToastNotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
