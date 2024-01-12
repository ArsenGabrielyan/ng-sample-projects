import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { finalize, Subject, takeUntil, timer } from 'rxjs';
import { IDrumKit } from 'src/app/interfaces/music-instruments';

@Component({
  selector: 'app-drum-kit',
  templateUrl: './drum-kit.component.html',
  styleUrls: ['./drum-kit.component.scss']
})
export class DrumKitComponent implements OnInit, OnDestroy {
  audio!: HTMLAudioElement;
  drumKit: IDrumKit[] = [
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
  destroy = new Subject<void>();
  constructor(private renderer: Renderer2){}
  keyListener!: Function;
  ngOnInit():void{
    this.keyListener = this.renderer.listen('window','keydown',this.keyDown.bind(this))
  }
  ngOnDestroy(): void {
    this.keyListener();
    this.destroy.next();
  }
  playAudio(key:string){
    const btn = document.querySelector(`#${key}`);
    btn?.classList.add("active")
    this.audio = new Audio(`../assets/sounds/beat/${key.toLowerCase()}.wav`);
    this.audio.play();
    timer(100).pipe(finalize(()=>btn?.classList.remove("active")),takeUntil(this.destroy)).subscribe();
  }
  keyDown(e:KeyboardEvent){
    if(!e.repeat) this.playAudio(e.key)
  };
}