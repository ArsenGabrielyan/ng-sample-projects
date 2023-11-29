import { Component } from '@angular/core';
import { IRpsSelection } from 'src/app/interfaces/rps-selection';

@Component({
  selector: 'app-rps-game',
  templateUrl: './rps-game.component.html',
  styleUrls: ['./rps-game.component.scss']
})
export class RpsGameComponent {
  pcArr: string[] = ["rock", "paper", "scissors"];
  msg = "";
  playerArr: IRpsSelection[] = [
    {selection: "rock", display: "✊"},
    {selection: "paper", display: "✋"},
    {selection: "scissors", display: "✌️"}
  ]
  getRandomChoice(){
    const pcIcon = document.getElementById("pc-choice");
    const pcChoice = this.pcArr[Math.floor(Math.random()*this.pcArr.length)];
    switch(pcChoice){
      case "rock":
        pcIcon!.innerHTML = "✊";
        break;
      case "paper":
        pcIcon!.innerHTML = "✋";
        break;
      case "scissors":
        pcIcon!.innerHTML = "✌️";
        break;
    }
    return pcChoice;
  }
  startGameAs(choice:string){
    this.msg = "Rock";
    setTimeout(()=>{
      this.msg = 'Paper'
      setTimeout(()=>{
        this.msg = 'Scissors'
        setTimeout(()=>{
          this.msg = 'Shoot'
        },375);
      },375);
    },375);
    setTimeout(()=>{
      const playerIcon = document.getElementById("player-choice");
      const pcIcon = document.getElementById("pc-choice");
      const pcChoice = this.getRandomChoice();
      switch(choice){
        case "rock":
          playerIcon!.innerHTML = "✊";
          break;
        case "paper":
          playerIcon!.innerHTML = "✋";
          break;
        case "scissors":
          playerIcon!.innerHTML = "✌️";
          break;
      }
      if(
        (choice === "rock" && pcChoice === "paper") ||
        (choice === "paper" && pcChoice === "scissors") ||
        (choice === "scissors" && pcChoice === "rock")
      ) {
          this.msg = "PC Wins";
          pcIcon?.classList.add("winner");
          playerIcon?.classList.remove("winner");
      } else if(
        (choice === "paper" && pcChoice === "rock") ||
      (choice === "scissors" && pcChoice === "paper") ||
      (choice === "rock" && pcChoice === "scissors")
      ) {
        this.msg = "You Win";
        pcIcon?.classList.remove("winner");
        playerIcon?.classList.add("winner");
      } else{
        this.msg = "It's a Tie";
        pcIcon?.classList.remove("winner");
        playerIcon?.classList.remove("winner");
      }
    },1500)
  }
}