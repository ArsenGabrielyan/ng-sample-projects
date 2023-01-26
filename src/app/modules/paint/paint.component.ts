import { AfterViewInit, Component, ElementRef, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { IPaintOption } from 'src/app/interfaces/paint-option';

@Component({
  selector: 'app-paint',
  templateUrl: './paint.component.html',
  styleUrls: ['./paint.component.scss']
})
export class PaintComponent implements AfterViewInit {
  @ViewChild("draw", {read: ElementRef<HTMLCanvasElement>, static: false}) public canvas!: ElementRef<HTMLCanvasElement>;
  public ctx!: CanvasRenderingContext2D;
  @ViewChildren("tool", {read: ElementRef}) toolsRef!: QueryList<ElementRef>; @ViewChildren("colors") colors!: QueryList<ElementRef>;
  prevX!: number;
  prevY!: number;
  snapshot!: ImageData;
  options: IPaintOption[] = [
    {icon: "../../../assets/images/paint-icons/rectangle.svg", text: "Rectangle"},
    {icon: "../../../assets/images/paint-icons/circle.svg", text: "Circle"},
    {icon: "../../../assets/images/paint-icons/triangle.svg", text: "Triangle"}
  ]
  tools: IPaintOption[] = [
    {icon: "../../../assets/images/paint-icons/brush.svg", text: "Brush", isActive: true},
    {icon: "../../../assets/images/paint-icons/eraser.svg", text: "Eraser"}
  ]
  fill = false;
  brushWidth = 1;
  color = "#0098ff";
  selected = "brush";selectedColor = "#000";isDrawing = false;
  constructor(private renderer: Renderer2){}
  ngAfterViewInit(): void {
    this.ctx = this.canvas.nativeElement.getContext("2d")!
    this.canvas.nativeElement.width = this.canvas.nativeElement.offsetWidth;
    this.respH(window.matchMedia("(max-width: 600px)")); this.setBg();
    this.toolsRef.map(el => el.nativeElement.addEventListener("click", ()=>{
      document.querySelector(".options .active")?.classList.remove("active")
      this.renderer.addClass(el.nativeElement, "active");this.selected = el.nativeElement.id;
    }))
    this.colors.map(el => el.nativeElement.addEventListener("click", ()=>{
      document.querySelector(".options .selected")?.classList.remove("selected")
      this.renderer.addClass(el.nativeElement, "selected");this.selectedColor = window.getComputedStyle(el.nativeElement).getPropertyValue("background-color");
    }))
  }
  drawing(e:any){
    if(!this.isDrawing) return;this.ctx.putImageData(this.snapshot,0,0)
    switch(this.selected){
      case "eraser": case "brush":
        this.ctx.strokeStyle = this.selected === "eraser" ? "#fff" : this.selectedColor;
        this.ctx.lineTo(e.offsetX, e.offsetY);
        this.ctx.stroke();
        break;
      case "rectangle":this.drawRect(e);break;
      case "circle":this.drawCircle(e);break;
      case "line":this.drawLine(e);break;
      default:this.drawTriangle(e);break;
    }
  }
  startDraw(e:any){
    this.isDrawing = true; 
    this.prevX = e.offsetX;
    this.prevY = e.offsetY;
    this.ctx.beginPath();
    this.ctx.lineWidth = this.brushWidth;
    this.ctx.strokeStyle = this.selectedColor;
    this.ctx.fillStyle = this.selectedColor;
    this.snapshot = this.ctx.getImageData(0,0,this.canvas.nativeElement.width,this.canvas.nativeElement.height)
  }
  stopDraw(){this.isDrawing = false;}
  drawRect(e:any){
    !this.fill ? this.ctx.strokeRect(e.offsetX,e.offsetY,this.prevX - e.offsetX,this.prevY - e.offsetY) : this.ctx.fillRect(e.offsetX,e.offsetY,this.prevX - e.offsetX,this.prevY - e.offsetY);
  }
  drawCircle(e:any){
    this.ctx.beginPath();
    let radius = Math.sqrt(Math.pow((this.prevX - e.offsetX),2) + Math.pow((this.prevY - e.offsetY),2));
    this.ctx.arc(this.prevX, this.prevY, radius, 0, Math.PI*2);
    this.fill ? this.ctx.fill() : this.ctx.stroke();
  }
  drawTriangle(e:any){
    this.ctx.beginPath();
    this.ctx.moveTo(this.prevX,this.prevY);
    this.ctx.lineTo(e.offsetX,e.offsetY);
    this.ctx.lineTo(this.prevX*2-e.offsetX,e.offsetY)
    ;this.ctx.closePath();
    this.fill ? this.ctx.fill() : this.ctx.stroke();
  }
  drawLine(e:any){
    this.ctx.beginPath();
    this.ctx.moveTo(this.prevX,this.prevY);
    this.ctx.lineTo(e.offsetX,e.offsetY);
    this.ctx.stroke();
  }
  changeColor(e:any){
    this.renderer.setStyle(e.target.parentElement, "background-color", this.color);
    this.selectedColor = this.color;
  }
  clear(){
    this.ctx.clearRect(0,0,this.canvas.nativeElement.width,this.canvas.nativeElement.height);
    this.setBg();
  }
  setBg(){
    this.ctx.fillStyle = "#fff";
    this.ctx.fillRect(0,0,this.canvas.nativeElement.width,this.canvas.nativeElement.height);
    this.ctx.fillStyle = this.selectedColor;
  }
  save(){
    const a = document.createElement("a"),
    ext = prompt("select format (Supported: .jpg (.jpeg), .png, .tiff, .gif, .webp, .bmp)", ".jpg"),
    url = `${Date.now()+ext!}`;
    if((/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i).test(url)) {
      a.download = url;
      a.href = this.canvas.nativeElement.toDataURL();
      a.click();
    } else alert("Invalid ext");
  }
  respH(query:MediaQueryList){query.matches?this.canvas.nativeElement.height = this.canvas.nativeElement.offsetHeight*4.75:this.canvas.nativeElement.height = this.canvas.nativeElement.offsetHeight;}
}
