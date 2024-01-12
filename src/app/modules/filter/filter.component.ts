import { Component } from '@angular/core';
import { IFilterItem, IFilterLink } from 'src/app/interfaces/filter-project';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  active = "all";
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
  links: IFilterLink[] = [
    {text: "all", action: ()=>this.changeFilter("all")},
    {text: "camera", action: ()=>this.changeFilter("camera")},
    {text: "mobile", action: ()=>this.changeFilter("mobile")},
    {text: "watch", action: ()=>this.changeFilter("watch")},
    {text: "shoe", action: ()=>this.changeFilter("shoe")},
    {text: "headphones", action: ()=>this.changeFilter("headphones")}
  ]  
  changeFilter(item:string){
    this.active = item;
  }
}
