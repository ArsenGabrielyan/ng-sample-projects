import { AfterViewInit, Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[touchEnabled]'
})
export class TouchEnabledDirective implements AfterViewInit {
  dragging = false; 
  linkBox!: Element; 
  icons!: Element[]; 
  startX = 0;
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngAfterViewInit(): void {
    this.linkBox = this.el.nativeElement.querySelector(".links");
    this.icons = Array.from(document.getElementsByClassName("icon") as HTMLCollectionOf<Element>) 
  }
  @HostListener("touchstart", ["$event"]) onTouchStart(e:TouchEvent){
    this.dragging = true;
    this.startX = e.changedTouches[0].clientX
  }
  @HostListener("touchmove", ['$event']) onTouchMove(e:TouchEvent){
    if(!this.dragging) return;
    this.linkBox.classList.add("drag");
    this.linkBox.scrollLeft += this.startX - e.changedTouches[0].clientX-10;
    this.iconVisib();
  }
  @HostListener("touchend") onTouchEnd(){
    this.dragging = false;
    this.linkBox.classList.remove("drag");
  }
  iconVisib(){
    let scroll = Math.round(this.linkBox.scrollLeft),
    max = this.linkBox.scrollWidth - this.linkBox.clientWidth;
    const first = this.icons[0], last = this.icons[1];
    this.renderer.setStyle(first,"display",scroll > 0 ? "flex" : "none");
    this.renderer.setStyle(last,"display",max > scroll ? "flex" : "none");
  }
}
