import { Component } from '@angular/core';
import { ICalcBtn } from 'src/app/interfaces/calc-btn';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent {
  input = "";
  eq = 0;
  disabled = false;
  calcBtns: ICalcBtn[] = [
    {text: "DEL", action: ()=>this.del(), disabled: this.disabled},
    {text: "%", action: ()=>this.percent(), disabled: this.disabled},
    {text: "/", action: ()=>this.valInp("/"), disabled: this.disabled},
    {text: "7", action: ()=>this.valInp("7"), disabled: this.disabled},
    {text: "8", action: ()=>this.valInp("8"), disabled: this.disabled},
    {text: "9", action: ()=>this.valInp("9"), disabled: this.disabled},
    {text: "*", action: ()=>this.valInp("*"), disabled: this.disabled},
    {text: "6", action: ()=>this.valInp("6"), disabled: this.disabled},
    {text: "5", action: ()=>this.valInp("5"), disabled: this.disabled},
    {text: "4", action: ()=>this.valInp("4"), disabled: this.disabled},
    {text: "-", action: ()=>this.valInp("-"), disabled: this.disabled},
    {text: "1", action: ()=>this.valInp("1"), disabled: this.disabled},
    {text: "2", action: ()=>this.valInp("2"), disabled: this.disabled},
    {text: "3", action: ()=>this.valInp("3"), disabled: this.disabled},
    {text: "+", action: ()=>this.valInp("+"), disabled: this.disabled},
    {text: "0", action: ()=>this.valInp("0"), disabled: this.disabled},
    {text: "00", action: ()=>this.valInp("00"), disabled: this.disabled},
    {text: ".", action: ()=>this.valInp("."), disabled: this.disabled},
    {text: "+/-", action: ()=>this.plusmn(), disabled: this.disabled},
  ]
  valInp(val: string){
    if(this.disabled) return;
    if(this.eq === 0){
      this.input = val;
      this.eq = 1;
    } else {
      if(val === "." && this.input !== ""){
        const lastNum = this.getLastOperand();
        if(lastNum.lastIndexOf(".") >= 0) return;
      }
      this.input += val;this.eq = 1;
    }
  }
  percent(){
    if(this.input === "" || this.eq === 0) return;
    this.input = `${parseFloat(this.input)/100}`;
    this.eq = 0;
  }
  eql(){
    if(this.disabled) return;
    this.eq = 1;
    try{
      let solution = eval(this.input);
      Number.isInteger(solution) ? this.input = solution : this.input = `${Math.round(solution*Math.pow(10,16))/Math.pow(10,16)}`;
      if(isNaN(solution)) { 
        this.input = "Error"; 
        this.disabled = true;
      }
      if(solution === Infinity) this.disabled = true;
      this.eq = 0;
    }
    catch(err){
      this.input = "Invalid Input";
      this.disabled = true;
      this.eq = 0;
    }
  }
  answer(){
    this.input = this.input;
    this.eq = 1;
  }
  getLastOperand(){
    let pos = this.input.lastIndexOf("+")
    if(this.input.lastIndexOf("-") > pos) pos = this.input.lastIndexOf("-");
    if(this.input.lastIndexOf("*") > pos) pos = this.input.lastIndexOf("*");
    if(this.input.lastIndexOf("/") > pos) pos = this.input.lastIndexOf("/");
    return this.input.substr(pos+1);
  }
  plusmn(){
    if(this.disabled) return; 
    this.input = `${+this.input * -1}`; 
    this.eq = 1;
  }
  clear(){
    this.input = ""; 
    this.disabled = false
  }
  del(){
    if(this.disabled) return; 
    this.input = this.input.substring(0,this.input.length-1)
  }
}