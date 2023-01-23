import { Component, ElementRef, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { finalize, timer } from 'rxjs';
import { NavLink } from 'src/app/interfaces/nav-link';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  @ViewChild("linkbox") linkBox!: ElementRef<HTMLDivElement>;
  @ViewChildren("icns") icons!: QueryList<ElementRef<HTMLButtonElement>>;
  toggled = false;dragging = false;
  links: NavLink[] = [
    {link: "/notes", text: "Notes"},
    {link: "/to-do", text: "To Do List"},
    {link: "/weather", text: "Weather"},
    {link: "/toast", text: "Toast Notification"},
    {link: "/rps-game", text: "Rock Paper Scissors"},
    {link: "/quote-gen", text: "Quote Generator"},
    {link: "/piano", text: "Piano"},
    {link: "/paint", text: "Drawing"},
    {link: "/filter", text: "Filter With Classes"},
    {link: "/magic-8", text: "Magic 8 Ball"},
    {link: "/drum", text: "Drum Kit"},
    {link: "/clock", text: "Clock"},
    {link: "/calc", text: "Calculator"},
    {link: "/color-gen", text: "Color Generator"},
    {link: "/theme", text: "Dark Mode Toggler"}
  ]
  constructor(private renderer: Renderer2){}
  toggle = () => this.toggled = !this.toggled;
  startDrag = () => this.dragging = true;
  stopDrag(){
    this.dragging = false;
    this.renderer.removeClass(this.linkBox.nativeElement, "drag");
  }
  drag(e:any){
    if(!this.dragging) return;
    this.renderer.addClass(this.linkBox.nativeElement, "drag");
    this.linkBox.nativeElement.scrollLeft -= e.movementX;
    this.iconVisib();
  }
  iconClick(e:any){
    this.linkBox.nativeElement.scrollLeft += e.target.id === "left" ? -350 : 350;
    timer(50).pipe(finalize(()=> this.iconVisib())).subscribe();
  }
  iconVisib(){
    let scroll = Math.round(this.linkBox.nativeElement.scrollLeft),
    max = this.linkBox.nativeElement.scrollWidth - this.linkBox.nativeElement.clientWidth;
    this.icons.get(0)!.nativeElement.style.display = scroll > 0 ? "flex" : "none";
    this.icons.get(1)!.nativeElement.style.display = max > scroll ? "flex" : "none"
  }
}