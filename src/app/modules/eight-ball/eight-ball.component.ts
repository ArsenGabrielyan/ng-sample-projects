import { Component, OnDestroy } from '@angular/core';
import { Subject, timer, map, takeUntil } from 'rxjs';

@Component({
  selector: 'app-eight-ball',
  templateUrl: './eight-ball.component.html',
  styleUrls: ['./eight-ball.component.scss']
})
export class EightBallComponent implements OnDestroy {
  shaking = false;
  destroy$ = new Subject<void>();
  fortune: string[] = ['It is certain', 'It is decidedly so', 'Without a doubt', 'Yes -- definitely', 'You may rely on it', 'As I see it, yes', 'Most likely', 'Outlook good', 'Yes, Signs point to yes', 'Reply hazy', 'try again', 'Ask again later', 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again', 'Dont count on it', 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful'];
  msg = "";
  snd = new Audio("../assets/sounds/shake.wav");
  ngOnDestroy():void{
    this.destroy$.next();
  }
  shake(){
    const timeout = timer(1000);
    this.msg = "";
    this.shaking = true;
    this.snd.play();
    timeout.pipe(map(() => {
      this.shaking = false; 
      this.snd.pause(); 
      this.snd.currentTime = 0; 
      this.getFortune();
    }),takeUntil(this.destroy$)).subscribe()
  }
  getFortune(){
    this.msg = this.fortune[Math.floor(Math.random()*this.fortune.length)]
  }
}
