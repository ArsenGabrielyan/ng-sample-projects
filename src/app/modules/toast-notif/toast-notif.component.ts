import { Component, OnDestroy } from '@angular/core';
import { Subject, timer, takeUntil, finalize, map } from 'rxjs';
import { IToast, IToastElem } from 'src/app/interfaces/toast';

@Component({
  selector: 'app-toast-notif',
  templateUrl: './toast-notif.component.html',
  styleUrls: ['./toast-notif.component.scss']
})
export class ToastNotifComponent implements OnDestroy {
  destroy$ = new Subject<void>(); 
  class: string[] = [];
  toasts: IToastElem[] = [];
  toastDetails: IToast | any = {
    timer: 5000,
    success: {icon: "check_circle",text: "This is a Success Toast"},
    error: {icon: "error",text: "Error: Something Bad Happened"},
    warning: {icon: "warning",text: "Warning: Something will happen soon"},
    info: {icon: "info",text: "I've Learned Angular and Made This"}
  }
  ngOnDestroy(): void {
    this.destroy$.next();
  }
  removeToast(){
    if(!this.toasts.length) return;
    const toast = document.querySelectorAll(".toast")[0];
    toast?.classList.add("hide");
    timer(500).pipe(map(()=>{
      this.toasts.shift(); 
      this.class.splice(0,1);
    }),takeUntil(this.destroy$)).subscribe();
  }
  createToast(e:MouseEvent){
    const elem = e.target as HTMLElement
    this.class.push(elem.id);
    const {icon, text} = this.toastDetails[elem.id];
    const toast: IToastElem = {icon: icon, text: text};
    const timeout = timer(this.toastDetails.timer);
    this.toasts.push(toast);
    timeout.pipe(finalize(()=>this.removeToast()),takeUntil(this.destroy$)).subscribe();
    if(!this.toasts.length) return;
  }
}