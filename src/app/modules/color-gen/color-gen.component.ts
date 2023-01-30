import { Component } from '@angular/core';
import {Clipboard} from "@angular/cdk/clipboard"

@Component({
  selector: 'app-color-gen',
  templateUrl: './color-gen.component.html',
  styleUrls: ['./color-gen.component.scss']
})
export class ColorGenComponent {
  clrView = "";
  clrBox = "";
  toggled = false;
  copiedtxt = "";
  constructor(private clipboard: Clipboard){}
  getColor(){
    const chars = "0123456789abcdef";
    const clrLength = 6;
    let color = "";
    for(let i=0; i<clrLength; i++){
      let rand = Math.floor(Math.random()*chars.length);
      color += chars.substring(rand, rand+1);
    }
    this.clrView= "#"+color;
    this.copiedtxt = `Color Copied: #${color}`
    this.clrBox = "#"+color;
  }
  copyColor(){
    this.clipboard.copy(this.clrView);
    alert(this.copiedtxt);
  }
}
