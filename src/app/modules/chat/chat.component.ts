import { Component, OnInit, inject, signal } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms"
import { IMessage } from './data/message.interface';
import { fileRegexp, formatBytes, toBase64, toBottom, validation } from './data/constants';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  initialData!: FormGroup; isSubmitted = signal(false);
  msg = signal(""); msgInput = "";
  user1 = localStorage.getItem("chat-user1")! || "";
  user2 = localStorage.getItem("chat-user2")! || "";
  tab = localStorage.getItem("chat-selected")! || this.user1;
  messages: IMessage[] = JSON.parse(localStorage.getItem("chat-messages")!) || [];
  interval!: NodeJS.Timer;
  
  private fb = inject(FormBuilder)
  ngOnInit(): void {
    this.initialData = this.fb.group({
      user1: ["", Validators.required],
      user2: ["", Validators.required]
    });
    toBottom();
  }
  changeTab(tab:string){
    this.tab = tab;
    localStorage.setItem("chat-selected", tab);
  }
  handleInit(){
    this.isSubmitted.set(true);
    if(this.initialData.valid){
      const v1:string = this.initialData.controls["user1"].value;
      const v2:string = this.initialData.controls["user2"].value;
      this.msg.set(validation(v1,v2))
      if(v1===v2 || (v1.trim()===""||v2.trim()==="")) return;
      this.msg.set(""); this.user1 = v1; this.user2 = v2;
      localStorage.setItem("chat-user1",v1);
      localStorage.setItem("chat-user2",v2);
      this.changeTab(v1); this.initialData.reset({user1:"",user2:""})
      this.isSubmitted.set(false);
    } else this.msg.set("Required")
  }
  sendMsg(){
    toBottom();
    if(this.msgInput.trim()!==""){
      const message: IMessage = {
        sender: this.tab===this.user1 ? this.user1 : this.user2,
        msg: this.msgInput
      };
      this.messages.push(message);
    }
    localStorage.setItem("chat-messages", JSON.stringify(this.messages))
    this.messages = JSON.parse(localStorage.getItem("chat-messages")!)
    this.msgInput = "";
  }
  attach = () => document.getElementById("fileInput")?.click();
  handleKey(e:KeyboardEvent){
    if(e.altKey && e.key==="Enter"){
      e.preventDefault();
      this.msgInput+="\n";
    }
    if(!e.altKey && e.key==="Enter"){
      e.preventDefault();
      this.sendMsg();
    }
  }
  clear(type: string=""){
    type==='msg' ? localStorage.removeItem("chat-messages") : localStorage.clear();
    window.location.reload();
  }
  async handleUpload(e:Event){
    try{
      toBottom();
      const elem = e.target as HTMLInputElement
      const file = elem.files?.[0], fileAsB64 = await toBase64(file) as string;
      const msg: IMessage = {
        sender: this.tab===this.user1 ? this.user1 : this.user2,
        msg: "",
        attachment: fileAsB64,
        fileName: file?.name!,
        fileSize: formatBytes(file?.size!)
      }
      if(fileRegexp.isImage.test(file?.name!)) msg.fileType = "image";
      else if(fileRegexp.isVideo.test(file?.name!)) msg.fileType = "video";
      else if(fileRegexp.isAudio.test(file?.name!)) msg.fileType = "audio";
      else msg.fileType = "other";
      this.messages.push(msg);
      localStorage.setItem("chat-messages", JSON.stringify(this.messages))
      this.messages = JSON.parse(localStorage.getItem("chat-messages")!)
      this.msgInput = "";
    } catch {
      alert("The File size is Too Huge for Send. Compress that Before Sending");
      this.messages.pop();
      return;
    } 
  }
}