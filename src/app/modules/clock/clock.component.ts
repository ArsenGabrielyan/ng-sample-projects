import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, interval, takeUntil, map, shareReplay, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnDestroy, OnInit, AfterViewInit {
  mode = localStorage.getItem("clock-mode");hrFormat = localStorage.getItem("clock-format");glowEnabled = localStorage.getItem("clock-glowEnabled");yearShown = localStorage.getItem("clock-yearShown");
  hr!: Observable<string>; mn!: Observable<string>; sc!: Observable<string>; day!: Observable<string>; year!: Observable<number>; week!: Observable<string>; month!: Observable<string>; period!: Observable<string>;
  destroy: Subject<void> = new Subject();
  toggleFormat = false; toggleMenu = false; toggleDarkMode = true; toggleGlow = true; toggleYear = true;
  format = 12;

  ngOnInit(): void {this.initClock();this.initToggler();}
  ngAfterViewInit(): void {document.addEventListener("click", (e)=>{if(e.target === document.body || e.target === document.querySelector(".clock-container")) this.toggleMenu = false})}
  ngOnDestroy(): void{this.destroy.next()}

  initClock(){
    const date$ = interval(250).pipe(takeUntil(this.destroy),map(()=> new Date()),shareReplay())
    this.hr = date$.pipe(map(date => this.format === 12 ? (this.addZeros(date.getHours() >= 12 ? date.getHours() % 12 : date.getHours())) : this.addZeros(date.getHours())),distinctUntilChanged())
    this.mn = date$.pipe(map(date => this.addZeros(date.getMinutes())),distinctUntilChanged())
    this.sc = date$.pipe(map(date => this.addZeros(date.getSeconds())),distinctUntilChanged())
    this.day = date$.pipe(map(date => this.addZeros(date.getDate())),distinctUntilChanged())
    this.year = date$.pipe(map(date => date.getFullYear()),distinctUntilChanged())
    this.week = date$.pipe(map(date => date.toLocaleString("default", {weekday: "long"})),distinctUntilChanged())
    this.month = date$.pipe(map(date => date.toLocaleString("default", {month: "long"})),distinctUntilChanged())
    this.period = date$.pipe(map(date => this.format === 12 ? (date.getHours() >= 12 ? "PM" : "AM") : ""),distinctUntilChanged())
  }
  initToggler(){if(this.mode === "light") this.handleToggleDarkMode();if(this.hrFormat === "24") this.handleToggleFormat();if(this.glowEnabled === "no") this.handleToggleGlow();if(this.yearShown === "no") this.handleToggleYear();}
  handleToggleFormat(){
    this.toggleFormat = !this.toggleFormat; 
    if(this.toggleFormat){this.format = 24;localStorage.setItem("clock-format", String(this.format))} 
    else {this.format = 12;localStorage.setItem("clock-format", String(this.format))}
  }
  handleToggleGlow(){this.toggleGlow = !this.toggleGlow;this.toggleGlow ? localStorage.setItem("clock-glowEnabled", "yes") : localStorage.setItem("glowEnabled", "no")}
  handleToggleYear(){this.toggleYear = !this.toggleYear;this.toggleYear ? localStorage.setItem("clock-yearShown", "yes") : localStorage.setItem("clock-yearShown", "no")}
  handleToggleMenu = () => this.toggleMenu = !this.toggleMenu
  handleToggleDarkMode(){
    this.toggleDarkMode = !this.toggleDarkMode;
    if(this.toggleDarkMode) {document.querySelector(".clock-container")?.classList.remove("light");localStorage.setItem("clock-mode", "dark")} else {document.querySelector(".clock-container")?.classList.add("light");localStorage.setItem("clock-mode", "light");}
  }
  addZeros = (n:number):string => String(n).padStart(2, "0")
}
