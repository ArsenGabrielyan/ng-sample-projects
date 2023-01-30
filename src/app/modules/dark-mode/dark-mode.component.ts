import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.scss']
})
export class DarkModeComponent implements OnInit {
  mode = localStorage.getItem("app-theme") || "light";
  isEnabled = false;
  ngOnInit():void{
    if(this.mode === "light") this.toggleDarkMode()
  }
  switchMode(type:string):void{
    this.mode = type;
    localStorage.setItem("app-theme", this.mode);
  }
  toggleDarkMode():void{
    this.isEnabled = !this.isEnabled;
    !this.isEnabled ? this.switchMode("dark") : this.switchMode("light");
  }
}
