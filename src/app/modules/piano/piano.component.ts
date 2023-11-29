import { AfterViewInit, Component, ElementRef, OnDestroy, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { timer, finalize, Subject, takeUntil } from 'rxjs';
import { IPianoKey } from 'src/app/interfaces/piano-key';

@Component({
  selector: 'app-piano',
  templateUrl: './piano.component.html',
  styleUrls: ['./piano.component.scss']
})
export class PianoComponent implements AfterViewInit, OnDestroy {
  @ViewChildren("key") keys!: QueryList<ElementRef>;
  volume = 0.5;
  showKeys = true;
  pressed = false;
  pressedTimes = 0;
  audio!: HTMLAudioElement;
  destr = new Subject<void>();
  keyListener!: Function;
  keyList: IPianoKey[] = [
    {type: "white", key: "a"},
    {type: "black", key: "w"},
    {type: "white", key: "s"},
    {type: "black", key: "e"},
    {type: "white", key: "d"},
    {type: "white", key: "f"},
    {type: "black", key: "t"},
    {type: "white", key: "g"},
    {type: "black", key: "y"},
    {type: "white", key: "h"},
    {type: "black", key: "u"},
    {type: "white", key: "j"},
    {type: "white", key: "k"},
    {type: "black", key: "o"},
    {type: "white", key: "l"},
    {type: "black", key: "p"},
    {type: "white", key: ";"},
  ];
  constructor(private renderer: Renderer2){}
  ngAfterViewInit():void{
    this.keyListener = this.renderer.listen('window','keyup',this.playKey.bind(this))
  }
  ngOnDestroy(): void {
    this.keyListener();
    this.destr.next();
  }
  playTune(i:number){
    this.audio = new Audio(`../assets/sounds/tunes/${this.keyList[i!].key}.wav`);
    this.audio.volume = this.volume;
    this.audio.play();
    this.renderer.addClass(this.keys.get(i)?.nativeElement, "active");
    timer(150).pipe(finalize(()=> this.renderer.removeClass(this.keys.get(i)?.nativeElement, "active")),takeUntil(this.destr)).subscribe();
  }
  playKey(e:KeyboardEvent){
    this.keyList.map((key:IPianoKey, i:number) => e.key === key.key ? this.playTune(i) : null);
  }
}