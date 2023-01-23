import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent {
  input = "";eq = 0;disabled = false;
  valInp(val: string){if(this.disabled) return;if(this.eq === 0){this.input = val;this.eq = 1;} else {if(val === "." && this.input !== ""){const lastNum = this.getLastOperand();if(lastNum.lastIndexOf(".") >= 0) return;}this.input += val;this.eq = 1;}}
  percent(){if(this.input === "" || this.eq === 0) return;this.input = `${parseFloat(this.input)/100}`;this.eq = 0;}
  eql(){
    if(this.disabled) return;this.eq = 1;
    try{let solution = eval(this.input);Number.isInteger(solution) ? this.input = solution : this.input = `${Math.round(solution*Math.pow(10,16))/Math.pow(10,16)}`;if(isNaN(solution)) { this.input = "Error"; this.disabled = true };if(solution === Infinity) this.disabled = true;this.eq = 0;}
    catch(err){this.input = "Invalid Input";this.disabled = true;this.eq = 0;}
  }
  answ(){this.input = this.input;this.eq = 1;}
  getLastOperand(){
    let pos = this.input.lastIndexOf("+")
    if(this.input.lastIndexOf("-") > pos) pos = this.input.lastIndexOf("-");
    if(this.input.lastIndexOf("*") > pos) pos = this.input.lastIndexOf("*");
    if(this.input.lastIndexOf("/") > pos) pos = this.input.lastIndexOf("/");
    return this.input.substr(pos+1);
  }
  plusmn(){this.input = `${+this.input * -1}`;this.eq = 1;}
  clear(){this.input = ""; this.disabled = false}
  del = () => this.input = this.input.substring(0,this.input.length-1)
}
