import { Component } from '@angular/core';
import { finalize, timer } from 'rxjs';
import { DrumKit } from 'src/app/interfaces/drum-kit';

@Component({
  selector: 'app-drum-kit',
  templateUrl: './drum-kit.component.html',
  styleUrls: ['./drum-kit.component.scss']
})
export class DrumKitComponent {
  audio!: HTMLAudioElement;
  drumKit: DrumKit[] = [
    {keyName: "A", drumPart: "hihat closed"},
    {keyName: "S", drumPart: "hihat open"},
    {keyName: "D", drumPart: "kick"},
    {keyName: "F", drumPart: "snare"},
    {keyName: "G", drumPart: "crash"},
    {keyName: "H", drumPart: "ride"},
    {keyName: "J", drumPart: "high tom"},
    {keyName: "K", drumPart: "floor tom"},
    {keyName: "L", drumPart: "mid tom"}
  ]
  ngOnInit(): void {document.addEventListener("keydown", (e)=>this.keyDown(e))}
  playAudio(key:string, e:any){
    const btn = e.target.querySelector(`#${key}`);btn?.classList.add("active")
    this.audio = new Audio(`../assets/sounds/beat/${key.toLowerCase()}.wav`);this.audio.play().catch(()=>{return;});
    timer(100).pipe(finalize(()=>btn?.classList.remove("active"))).subscribe()
  }
  keyDown = (e:any) => this.playAudio(e.key,e);
}