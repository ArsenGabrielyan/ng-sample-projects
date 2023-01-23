import { Component } from '@angular/core';
import { map } from 'rxjs';
import { HttpQuoteService } from './service/http-quote.service';
import {Clipboard} from "@angular/cdk/clipboard"

@Component({
  selector: 'app-quote-gen',
  templateUrl: './quote-gen.component.html',
  styleUrls: ['./quote-gen.component.scss']
})
export class QuoteGenComponent {
  btnText = "Loading...";quote = "";author = "";btnClass = "";
  constructor(private httpService: HttpQuoteService, private clipboard: Clipboard){}
  ngOnInit(): void {this.randomQuote()}
  randomQuote(){this.btnText = "Loading...";this.btnClass = "loading";this.httpService.getData().pipe(map(res =>this.getQuote(res))).subscribe()}
  textToSpeech(){let utterance = new SpeechSynthesisUtterance(`${this.quote} by ${this.author}`);speechSynthesis.speak(utterance);}
  copyQuote(){this.clipboard.copy(this.quote);alert("Successfully Copied Quote");}
  getQuote(val:any){this.quote = val.content;this.author = val.author;this.btnText = "New Quote";this.btnClass = "";}
}
