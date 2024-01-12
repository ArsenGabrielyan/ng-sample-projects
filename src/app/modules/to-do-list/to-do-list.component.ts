import { Component, OnDestroy, Renderer2, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IToDoItem } from '../../interfaces/checklist-items';
import {timer, takeUntil, Subject, map} from "rxjs"

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnDestroy {
  id: string = localStorage.getItem("to-do-app-tab") || "active";
  pending: IToDoItem[] = JSON.parse(localStorage.getItem("to-do-app-pending")!) || [];
  completed: IToDoItem[] = JSON.parse(localStorage.getItem("to-do-app-completed")!) || [];
  input = ""; destr = new Subject<void>();
  private rend = inject(Renderer2);
  ngOnDestroy(): void {
    this.destr.next()
  }
  tabChange(t:string){
    this.id = t;
    localStorage.setItem("to-do-app-tab", this.id);
  }
  addToDo(form: NgForm){
    let item: IToDoItem = {
      item: this.input,
      checked: false,
      dateCreated: new Date(Date.now()).toUTCString()
    };
    if(this.input.trim()!=='') {
      this.pending.push(item);
      localStorage.setItem("to-do-app-pending", JSON.stringify(this.pending));
      form.reset(this.input);
    }
  }
  handleCheckBox(e:MouseEvent, i:number){
    const elem = e.target as HTMLInputElement
    if(elem.checked === undefined) return;
    const parent = elem.parentNode?.parentElement;
    this.pending[i].checked = !this.pending[i].checked;
    this.completed.push(this.pending[i]);
    if(elem.checked === this.pending[i].checked) {
      this.removeItem(parent,i);
    }
  }
  editToDo(i:number){
    const newVal = prompt('Enter a new Value'); 
    if(newVal?.trim() === "") alert("It's Required");
    else {
      this.pending[i].item = newVal!;
      this.pending[i].dateCreated = new Date(Date.now()).toUTCString();
    }
    localStorage.setItem("to-do-app-pending", JSON.stringify(this.pending))
  }
  deleteToDo(i:number){
    if(confirm("Are you sure to delete this task (item)?")){
      this.completed.splice(i,1);
      localStorage.setItem("to-do-app-completed", JSON.stringify(this.completed));
    }
  }
  markAll(){
    if(this.pending.length){
        this.pending.map((_,i)=>{
        this.pending[i].checked = true;
        this.completed.push(this.pending[i]);
        if(this.pending[i].checked) {
          this.removeItem(document.querySelectorAll(".toDo")[i], i, this.pending.length);
        }
      })
    } else alert("There is No Pending Tasks"); 
  }
  removeItem(parent: Element | null | undefined, i:number, count: number = 1){
    this.rend.addClass(parent, "hide");
    timer(500).pipe(map(()=>{
      parent?.remove();
      this.pending.splice(i,count);
      localStorage.setItem("to-do-app-pending", JSON.stringify(this.pending))
    }),takeUntil(this.destr)).subscribe();
    localStorage.setItem("to-do-app-completed", JSON.stringify(this.completed))
  }
  clearAll(){
    if(this.completed.length){
        this.completed.map(()=>{
        if(confirm("Are you sure to Clear all Completed Tasks?")){
          this.completed.splice(0,this.completed.length);
          localStorage.setItem("to-do-app-completed", JSON.stringify(this.completed))
        }
      })
    } else alert("There is no Completed Tasks"); 
  }
}