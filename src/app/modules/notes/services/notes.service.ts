import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { INote } from 'src/app/interfaces/note';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor() { }

  addNote(notes: INote[], form: FormGroup){
    const {title,note} = form.value;
    let data: INote = {title:title,note:note};
    notes.push(data);
    localStorage.setItem('note-app-notes',JSON.stringify(notes));
    form.reset({title:"",note:""})
  }
  editNote(form: FormGroup, notes: INote[], chosen: number){
    const {newTitle,newNote} = form.value;
    notes[chosen].title = newTitle;
    notes[chosen].note = newNote;
    localStorage.setItem('note-app-notes',JSON.stringify(notes));
    form.reset({newTitle: "",newNote: "",});
  }
  deleteNote(del: INote[], notes: INote[], i:number){
    del.push(notes[i]);
    notes.splice(i,1);
    localStorage.setItem('note-app-notes',JSON.stringify(notes));
    localStorage.setItem('note-app-deleted',JSON.stringify(del));
  }
}
