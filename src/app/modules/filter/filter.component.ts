import { Component, ElementRef, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { IFilterItem } from 'src/app/interfaces/filter-item';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @ViewChildren("product") products!: QueryList<ElementRef<HTMLDivElement>>;
  active = "all"
  items: IFilterItem[] = [
    {filter: "headphones", img: "../assets/images/filter-img/headphone1.jpg"},
    {filter: "headphones", img: "../assets/images/filter-img/headphone2.jpg"},
    {filter: "headphones", img: "../assets/images/filter-img/headphone3.jpg"},
    {filter: "headphones", img: "../assets/images/filter-img/headphone4.jpg"},
    {filter: "camera", img: "../assets/images/filter-img/camera1.jpg"},
    {filter: "camera", img: "../assets/images/filter-img/camera2.jpg"},
    {filter: "camera", img: "../assets/images/filter-img/camera3.jpg"},
    {filter: "mobile", img: "../assets/images/filter-img/mobile1.jpg"},
    {filter: "mobile", img: "../assets/images/filter-img/mobile2.jpg"},
    {filter: "mobile", img: "../assets/images/filter-img/mobile3.jpg"},
    {filter: "mobile", img: "../assets/images/filter-img/mobile4.jpg"},
    {filter: "mobile", img: "../assets/images/filter-img/mobile5.jpg"},
    {filter: "shoe", img: "../assets/images/filter-img/shoe1.jpg"},
    {filter: "shoe", img: "../assets/images/filter-img/shoe2.jpg"},
    {filter: "shoe", img: "../assets/images/filter-img/shoe3.jpg"},
    {filter: "shoe", img: "../assets/images/filter-img/shoe4.jpg"},
    {filter: "watch", img: "../assets/images/filter-img/watch1.jpg"},
    {filter: "watch", img: "../assets/images/filter-img/watch2.jpg"},
    {filter: "watch", img: "../assets/images/filter-img/watch3.jpg"},
    {filter: "watch", img: "../assets/images/filter-img/watch4.jpg"},
  ];
  links: string[] = ["all","camera","mobile","watch","shoe","headphones"]
  constructor(private renderer: Renderer2){}
  handleClick(e: any){
    this.products.map((el)=>{
      this.renderer.addClass(el.nativeElement, "hide")
      this.renderer.removeClass(el.nativeElement, "active");
      if(el.nativeElement.id === e.target.id || e.target.id === "all"){
        this.active = e.target.id;
        this.renderer.addClass(el.nativeElement, "active");
        this.renderer.removeClass(el.nativeElement, "hide");
      }
    })
  }
}
